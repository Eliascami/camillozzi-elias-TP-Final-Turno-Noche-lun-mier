import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { useState } from 'react'
import "./Counter.css"

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    return (
        <>
            <div className='counterOne'>
                <button onClick={()=> setQuantity(quantity >1 ? quantity -1 : quantity)}>-</button>
                <span>{quantity}</span>
                <button  onClick={()=> setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
            </div>
            <div>
                <button className='btnComprar' onClick={() => addProductCart(id, quantity)}>COMPRAR</button>
            </div>
        </>
    )
}

export default Counter