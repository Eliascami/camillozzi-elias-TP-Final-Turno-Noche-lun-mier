import React from 'react'
import './Aside.css'
const Aside = () => {
  return (
    <div className='Filtrador'>
        <form action="" className='divsAside'>
            <div className='marca'>
                <h4>FILTRAR POR MARCA:</h4>
                <div  className='filterContainer'>
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
            </div>
            <div className='rubro'>
                <div className='rubroTitulo'>
                    <h4>FILTRAR POR CATEGORIA:</h4>
                </div>
                <div className='filterContainer'>
                    <label htmlFor="">
                        <input type="checkbox" /> ELECTRICA
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" /> DE MANO
                    </label>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Aside