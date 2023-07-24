import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
    return (
        <div className='productCard'>
            <div className='imgProduct'>
                <img src={producto.photo} alt="Foto del producto" />
            </div>
            <div className='infoProduct'>
                <h2>{producto.nombre}</h2>
                <h3>MARCA: {producto.marca}</h3>            
                <h2>PRECIO: <span className='precio'>${producto.precio}</span></h2>
                <Link to={"/vermas/" + producto.id} className='btnVerMas'>VER PRODUCTO</Link>
            </div>
        </div>
    )
}

export default ProductCard