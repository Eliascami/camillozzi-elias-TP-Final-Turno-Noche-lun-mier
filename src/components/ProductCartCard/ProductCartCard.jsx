import React from 'react'
import "./ProductCartCard.css"
import ProductContainer from '../ProductContainer/ProductContainer'

const ProductCartCard = ({producto}) => {
  return (

      <div className='productCartCard'>
        <div className='cartImg'>
              <img src={producto.photo} alt="Foto del producto" />
        </div>
        <div className='cartInfo'>
              <h2>{producto.nombre}</h2>
              <h3>MARCA: {producto.marca}</h3>            
              <h2>PRECIO: <span className='precio'>${producto.precio}</span></h2>
              <h3>CANTIDAD: {producto.quantity}</h3>
        </div>
      </div>

  )
}

export default ProductCartCard