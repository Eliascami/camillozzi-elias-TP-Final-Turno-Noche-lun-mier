import React, { useEffect } from 'react'
import { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductContainer, ProductCard } from '../../components'
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
            <div className='toolTitulo'>
                <h1 className='titulo'><span>Tools</span>Store</h1>
            </div>
                <input placeholder='Nombre del producto' value={searchProduct} onChange={(e)=> setSearchProduct(e.target.value)}/>

            <ProductContainer>
                {currentProducts.map(producto => (
                    <ProductCard producto={producto} key={producto.id}/>
                ))}
            </ProductContainer>
        </div>
    )
}

export default HomePage