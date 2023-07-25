import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='redes'>
        <a href=""><i className="bi bi-instagram"></i> <n /> Instagram</a>
        <a href=""><i className="bi bi-whatsapp"></i> Chat Now</a>
        <a href=""><i className="bi bi-facebook"></i> Facebook</a>
      </div>
      <div className='aboutUs'>
        <a href="">About Us</a>
        <a href="">Jobs</a>
        <a href="">FeedBack</a>
        <a href="">Services</a>
        <a href="">News</a>
      </div>
      <div className='copyright'>
        <p>copyright</p>
        <p>2023 Tools Store. Todos los derechos reservados</p>
        <a href="">Terminos y condiciones</a>

      </div>
    </div>
  )
}

export default Footer