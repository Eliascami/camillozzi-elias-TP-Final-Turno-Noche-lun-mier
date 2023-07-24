import React from 'react'
import './Aside.css'
const Aside = () => {
  return (
    <div className='Filtrador'>
        <form action="" className='divsAside'>
            <div className='marca'>
                <h3>FILTRAR POR MARCA:</h3>
                <label htmlFor="">
                    <input type="checkbox" /> STANLEY
                </label>
                <label htmlFor="">
                    <input type="checkbox" /> B+D
                </label>
                <label htmlFor="">
                    <input type="checkbox" /> DEWALT
                </label>
            </div>
            <div className='rubro'>
                <h3>FILTRAR POR CATEGORIA</h3>
                <label htmlFor="">
                    <input type="checkbox" /> ELECTRICA
                </label>
                <label htmlFor="">
                    <input type="checkbox" /> DE MANO
                </label>
            </div>
        </form>
    </div>
  )
}

export default Aside