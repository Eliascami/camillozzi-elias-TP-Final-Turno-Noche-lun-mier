import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div>

      <form action="" className='formContact'>
          <h3>DEJENOS SU MENSAJE:</h3>

          <div className='grupo-formulario'>
            <label htmlFor=""> 
              Nombre
            </label>
            <input type="text" required/>
          </div>

          <div className='grupo-formulario'>
            <label htmlFor=""> 
              Email
            </label>
            <input type="email" required/>
          </div>

          <div className='grupo-formulario'>
            <label htmlFor=""> 
              Asunto
            </label>
            <input type="text" required/>
          </div>

          <div className='grupo-formulario mensaje-form'>
            <label htmlFor=""> 
              Mensaje
            </label>
            <textarea id="mensaje" rows="5" required></textarea>
          </div>

          <div>
            <button type='submit' className='btnComprar'>ENVIAR</button>
          </div>
      </form>
    </div>
  )
}

export default Contact