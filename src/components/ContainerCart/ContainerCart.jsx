import React from 'react'
import './ContainerCart.css'

const ContainerCart = ({children}) => {
  return (
    <div className='cartContainer'>{children}</div>
  )
}

export default ContainerCart