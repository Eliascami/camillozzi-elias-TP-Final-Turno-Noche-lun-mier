import React from 'react'
import "./ProductContainer.css"

const ProductContainer = ({children}) => {
  return (
    <>
        <div className='productContainer'>
            {children}
        </div>
    </>
  )
}

export default ProductContainer