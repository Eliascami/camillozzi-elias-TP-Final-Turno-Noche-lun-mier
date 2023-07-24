import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ContainerCart, ProductCard, ProductCartCard, Footer } from '../../components'
import "./CartPage.css"

const CartPage = () => {
    const {cart, getTotal} = useCustomContext()
    console.log(getTotal())

    return (
        <div>
            <h2>EN EL CARRITO:</h2>
            <ContainerCart>
                {cart.map(product => (
                    <ProductCartCard key={product.id} producto={product}/>
                ))}
            </ContainerCart>
            <div>
                <h3>TOTAL: ${getTotal()}</h3>
            </div>
        </div>
    )
}

export default CartPage