import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ContainerCart, ProductCard, ProductCartCard, Footer } from '../../components'
import "./CartPage.css"

const CartPage = () => {
    const {cart, getTotal} = useCustomContext()
    console.log(getTotal())

    return (
        <div className='cartPage'>
            <div className='tituloCarrito'>
                <h2>EN EL CARRITO:</h2>
            </div>
            <ContainerCart>
                {cart.map(product => (
                    <ProductCartCard key={product.id} producto={product}/>
                ))}
            </ContainerCart>
            <div className='total'>
                <h3>TOTAL: ${getTotal()}</h3>
                <div className='comprar'>
                    <button className='btnComprar'>COMPRAR </button>
                </div>                
            </div>

        </div>
    )
}

export default CartPage