import { useState } from 'react'
import './App.css'
import { useCustomContext } from './ContextManager/ContextProvider'
import { ProductCard, ProductContainer } from './components'
import { CartPage, HomePage, VerMas, Contact } from './screens'
import { Route, Routes, NavLink } from 'react-router-dom'

const App = () => {

/*   const {products} = useCustomContext() */

  return (
    <div className='body'>
      <nav className='navBar'>
        <div>

        </div>

        <div className='links'>
          <NavLink to="/" className='ancla'>
            <i class="bi bi-house-door-fill"></i> HOME
          </NavLink>
          <NavLink to="/cart" className='ancla'>
            <i class="bi bi-cart-fill"></i> CARRITO
          </NavLink>
          <NavLink to="/contact" className='ancla'>
            CONTACTO
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/vermas/:id' element={<VerMas/>}/>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      
    </div>
  )
}

export default App
