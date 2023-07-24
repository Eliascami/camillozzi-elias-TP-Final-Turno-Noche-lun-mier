import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'
import "./VerMas.css"

const VerMas = () => {
  const {id} = useParams() 
  
  const {getProductById, addProductCart, isInCart, getProductCartById} = useCustomContext()


  const [productVerMas, setProductVerMas] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))


  const [productIsInCart, setProductIsInCart] = useState(isInCart(id))



  return (
    <div className='verMasGeneral'>
      <div className='verMas'>
        <div className='verMasPhoto'>
          <img src={productVerMas.photo} alt="" />
        </div>
        <div className='verMasInfo'>
          <h1>{productVerMas.nombre}</h1>
          <h2>PRECIO: <span className='precio'>${productVerMas.precio}</span></h2>
          <h2>MARCA: {productVerMas.marca}</h2>
          <p className='suave'>cantidad por bulto: {productVerMas.bulto}</p>
          <p>{productVerMas.descripcion}</p>
            {
              isInCart(id) 
              ?
              <Counter initialValue={productVerMas.quantity} stock={productVerMas.stock} id={productVerMas.id}/>
              :
              <Counter initialValue={1} stock={productVerMas.stock} id={productVerMas.id}/>
            }
        </div>
      </div>
    </div>
  )
}

export default VerMas