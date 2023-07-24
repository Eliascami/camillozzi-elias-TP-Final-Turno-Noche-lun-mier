import React, {createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const products = [
      {
        categoria: "DE MANO",
        nombre: "PICO DE LORO",
        bulto: "6 UNIDADES",
        marca: "stanley",
        precio: 38,
        id: 1,
        stock: 8,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae, voluptatum doloremque rem omnis incidunt. Nisi non ratione, incidunt ipsam dolores, debitis repellendus reiciendis at corrupti sequi quaerat maxime consectetur.",
        photo: "https://http2.mlstatic.com/D_NQ_NP_765496-MLA40009704214_122019-O.webp"
      },
      {
        categoria: "HELECTRICA",
        nombre: "TALADRO 12V",
        bulto: "1 UNIDAD",
        marca: "stanley",
        precio: 450,
        id: 2,
        stock: 8,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae, voluptatum doloremque rem omnis incidunt. Nisi non ratione, incidunt ipsam dolores, debitis repellendus reiciendis at corrupti sequi quaerat maxime consectetur.",
        photo: "https://images.fravega.com/f500/341ee27490d783c129d53651eb2c1a92.jpg"
      },
      {
        categoria: "HELECTRICA",
        nombre: "AMOLADORA 4 PUL.",
        bulto: "1 UNIDAD",
        marca: "B+D",
        precio: 120,
        id: 3,
        stock: 8,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae, voluptatum doloremque rem omnis incidunt. Nisi non ratione, incidunt ipsam dolores, debitis repellendus reiciendis at corrupti sequi quaerat maxime consectetur.",
        photo: "https://http2.mlstatic.com/D_NQ_NP_731866-MLA43056325716_082020-O.webp"
      },
      {
        categoria: "DE MANO",
        nombre: "PINZA UNIV. 6PUL",
        bulto: "6 UNIDADES",
        marca: "CROSSMASTER",
        precio: 40,
        id: 4,
        stock: 8,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae, voluptatum doloremque rem omnis incidunt. Nisi non ratione, incidunt ipsam dolores, debitis repellendus reiciendis at corrupti sequi quaerat maxime consectetur.",
        photo: "https://http2.mlstatic.com/D_NQ_NP_926650-MLA51253331623_082022-O.webp"
      },
            {
        categoria: "DE MANO",
        nombre: "DESTORNILLADOR X6",
        bulto: "4 UNIDADES",
        marca: "stanley",
        precio: 199,
        id: 5,
        stock: 8,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae, voluptatum doloremque rem omnis incidunt. Nisi non ratione, incidunt ipsam dolores, debitis repellendus reiciendis at corrupti sequi quaerat maxime consectetur.",
        photo: "https://http2.mlstatic.com/D_NQ_NP_631239-MLA46351790475_062021-O.webp"
      },
      {
        categoria: "HELECTRICA",
        nombre: "ROTOPERCUTOR 3.5J",
        bulto: "1 UNIDAD",
        marca: "DEWALT",
        precio: 950,
        id: 6,
        stock: 8,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae, voluptatum doloremque rem omnis incidunt. Nisi non ratione, incidunt ipsam dolores, debitis repellendus reiciendis at corrupti sequi quaerat maxime consectetur.",
        photo: "https://arcencohogar.vtexassets.com/arquivos/ids/326881/1128727-2.jpg?v=637944580277300000"
      },
      {
        categoria: "DE PINTURERIA",
        nombre: "PINCEL 1200-20",
        bulto: "12 UNIDADES",
        marca: "ROSARPIN",
        precio: 6,
        id: 7,
        stock: 8,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae, voluptatum doloremque rem omnis incidunt. Nisi non ratione, incidunt ipsam dolores, debitis repellendus reiciendis at corrupti sequi quaerat maxime consectetur.",
        photo: "https://giliycia.com.ar/media/catalog/product/cache/99c3ac325871812be19f74bdf645f821/4/7/47283_01.jpg"
      },
      {
        categoria: "HELECTRICA",
        nombre: "TALADRO 20V",
        bulto: "2 UNIDADES",
        marca: "DEWALT",
        precio: 620,
        id: 8,
        stock: 8,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae, voluptatum doloremque rem omnis incidunt. Nisi non ratione, incidunt ipsam dolores, debitis repellendus reiciendis at corrupti sequi quaerat maxime consectetur.",
        photo: "https://bercovichsa.vteximg.com.br/arquivos/ids/160844-690-690/2-taladro-percutor-atornillador-20v-dewalt-dcd985l2-ar.jpg?v=637868303948400000"
      }
    ]

    const getProductById = (id) => {
      return products.find(producto => producto.id === Number(id))
    }

    const getProductCartById = (id) => {
      return cart.find(producto => producto.id === Number(id))
    }

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
      return cart.some(producto => producto.id === Number(id))
    }

    const addProductCart = (id, quantity) => {
      if(isInCart(id)){
        setCart(cart.map(product => {
          if(product.id == id){
            product.quantity = quantity
          }
          return product
        }))
      }else {
        setCart([...cart, {...getProductById(id), quantity: quantity}])
      }
    }

    const getTotal = () => {
      let total = 0
      cart.forEach(product => total += product.precio * product.quantity)
      return total
    }
    
  return (
    <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider