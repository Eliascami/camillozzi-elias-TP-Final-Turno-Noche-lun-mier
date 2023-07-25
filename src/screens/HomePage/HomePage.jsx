import React, { useEffect } from 'react'
import { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductContainer, ProductCard, Aside, Footer } from '../../components'
import './HomePage.css'

const HomePage = () => {
    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [currentProducts, setCurrentProducts] = useState(products)

    useEffect(() => {
        setCurrentProducts(products.filter(producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase())))
    }, [searchProduct])
    return (
        <div className='homePageContainer'>
            <div className='filter'>
                <i className="bi bi-search"></i>
                <input placeholder='Buscar producto por nombre' value={searchProduct} onChange={(e)=> setSearchProduct(e.target.value)}/>
            </div>
            <div className='cuerpoYaside'>
                <div className='Aside'>
                    <Aside></Aside>
                </div>
                <div className='ProductsCuerpo'>
                    <ProductContainer>
                        {currentProducts.map(producto => (
                            <ProductCard producto={producto} key={producto.id}/>
                        ))}
                    </ProductContainer>
                </div>                

                
            </div>
            <Footer></Footer>
        </div>
    )
}

export default HomePage