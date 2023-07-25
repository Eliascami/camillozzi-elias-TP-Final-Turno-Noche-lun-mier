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
        descripcion: "La pinza pico de loro es una herramienta imprescindible para trabajos de sujeción. Con su diseño ajustable y mandíbulas dentadas, te permite agarrar objetos de diversas formas y tamaños con firmeza y seguridad. Perfecta para proyectos de mecánica y mantenimiento.",
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
        descripcion: "El taladro 12V es una potente herramienta inalámbrica que ofrece versatilidad y comodidad en tus tareas de perforación. Con su diseño compacto y batería recargable, te permite realizar perforaciones con precisión y facilidad en diferentes materiales, brindando un rendimiento óptimo en proyectos de construcción y mejoras para el hogar.",
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
        descripcion: "La amoladora de 4 pulgadas es una herramienta eléctrica imprescindible para trabajos de corte y desbaste. Con su tamaño compacto y potente motor, te proporciona la capacidad de cortar, lijar y pulir diversos materiales con eficiencia y precisión. Es ideal para proyectos de metalurgia, carpintería y renovación.",
        photo: "https://http2.mlstatic.com/D_NQ_NP_731866-MLA43056325716_082020-O.webp"
      },
      {
        categoria: "DE MANO",
        nombre: "PINZA UNIV. 6PUL",
        bulto: "6 UNIDADES",
        marca: "CROSSMASTER",
        precio: 40,
        id: 4,
        stock: 4,
        descripcion: "La pinza universal es una herramienta esencial y versátil para trabajos de agarre y manipulación. Con su diseño multifuncional y mordazas robustas, te permite sujetar, doblar y cortar objetos con facilidad y precisión. Ideal para proyectos de bricolaje, electrónica y reparaciones.",
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
        descripcion: "El DESTORNILLADOR kit X6 es una herramienta versátil y práctica que incluye seis puntas intercambiables, permitiéndote abordar diferentes tipos de tornillos con facilidad y precisión. Es ideal para proyectos de bricolaje y reparaciones domésticas.",
        photo: "https://http2.mlstatic.com/D_NQ_NP_631239-MLA46351790475_062021-O.webp"
      },
      {
        categoria: "HELECTRICA",
        nombre: "ROTOPERCUTOR 3.5J",
        bulto: "1 UNIDAD",
        marca: "DEWALT",
        precio: 950,
        id: 6,
        stock: 5,
        descripcion: "El rotopercutor de 3.5J es una herramienta de alto rendimiento para trabajos de perforación en materiales resistentes. Con su potente motor y mecanismo de percusión, te permite perforar fácilmente concreto, ladrillo y piedra. Es perfecto para proyectos de construcción y renovación que requieren perforaciones precisas y eficientes.",
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
        descripcion: "herramienta de pintura de alta calidad. Con sus cerdas suaves y resistentes, te permite aplicar pintura de manera uniforme y precisa en superficies diversas. Es ideal para proyectos de pintura en interiores y exteriores, proporcionando resultados profesionales y acabados impecables.",
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
        descripcion: "El taladro 20V es una poderosa herramienta inalámbrica que ofrece un alto rendimiento en tus proyectos de perforación y atornillado. Con su batería de 20V y diseño ergonómico, te brinda la libertad de movimiento y la potencia necesaria para perforar en diferentes materiales con facilidad y precisión. Es ideal para trabajos de construcción, montaje de muebles y reparaciones domésticas.",
        photo: "https://bercovichsa.vteximg.com.br/arquivos/ids/160844-690-690/2-taladro-percutor-atornillador-20v-dewalt-dcd985l2-ar.jpg?v=637868303948400000"
      },
      {
        categoria: "ME MANO",
        nombre: "PINZA SEEGER",
        bulto: "6 UNIDADES",
        marca: "STANLEY",
        precio: 55,
        id: 9,
        stock: 10,
        descripcion: "La pinza para aros segger está diseñada con puntas especiales que permiten comprimir el aro de retención, facilitando su colocación en la ranura del eje u orificio, o permitiendo retirarlo cuando sea necesario. Es una herramienta útil en trabajos de mecánica, maquinaria y mantenimiento donde se requiere la manipulación de aros de retención.",
        photo: "https://crossmaster.com.ar/wp-content/uploads/9970746.jpg"
      },
      {
        categoria: "HELECTRICA",
        nombre: "SIERRA CALADORA",
        bulto: "1 UNIDADES",
        marca: "DEWALT",
        precio: 210,
        id: 10,
        stock: 10,
        descripcion: "La sierra caladora es una herramienta eléctrica versátil y precisa para realizar cortes curvos y rectos en diversos materiales como madera, metal, plástico y más. Con su hoja intercambiable y movimiento oscilante, te permite crear formas y diseños personalizados con facilidad. Es ideal para proyectos de carpintería, trabajos de bricolaje y renovaciones en el hogar. Su capacidad para cortar en curvas la convierte en una opción popular para proyectos artísticos y detallados.",
        photo: "https://http2.mlstatic.com/D_NQ_NP_889575-MLA31112605782_062019-O.webp"
      },
      {
        categoria: "HELECTRICA",
        nombre: "AMOLADORA IND.",
        bulto: "1 UNIDADES",
        marca: "DEWALT",
        precio: 385,
        id: 11,
        stock: 3,
        descripcion: "La amoladora industrial DeWalt es una poderosa herramienta eléctrica diseñada para trabajos exigentes en entornos industriales y de construcción. Con su motor de alto rendimiento y discos de corte resistentes, es capaz de realizar tareas de desbaste y corte en materiales duros como metal, concreto y piedra de manera eficiente. Su robusto diseño y características de seguridad la convierten en una opción confiable para profesionales que buscan un rendimiento excepcional y durabilidad en sus proyectos más exigentes.",
        photo: "https://arcencohogar.vtexassets.com/arquivos/ids/326859/1085714.jpg?v=637944573201870000"
      },
      {
        categoria: "DE MANO",
        nombre: "MALETIN TODO EN 1",
        bulto: "6 UNIDADES",
        marca: "B+D",
        precio: 500,
        id: 12,
        stock: 5,
        descripcion: "El maletín de herramientas manuales Black and Decker es una solución completa para tus necesidades de bricolaje y reparación. Con una amplia selección de herramientas de alta calidad, como destornilladores, alicates, llaves, martillo y más, estás preparado para enfrentar una variedad de tareas. El diseño compacto y organizado del maletín te permite llevar tus herramientas de manera conveniente y ordenada a cualquier lugar donde se requiera tu habilidad. Es la opción ideal para entusiastas del bricolaje y profesionales que buscan una colección versátil y confiable de herramientas manuales.",
        photo: "https://arcencohogar.vtexassets.com/arquivos/ids/323390/1341045-1.jpg?v=637889295189200000"
      },
      {
        categoria: "HELECTRICA",
        nombre: "TALADRO PERCUTOR",
        bulto: "1 UNIDADES",
        marca: "BOSCH",
        precio: 250,
        id: 13,
        stock: 8,
        descripcion: "El taladro percutor Bosch es una herramienta eléctrica versátil y potente, ideal para perforar en madera, metal y mampostería. Con su diseño ergonómico y velocidad variable, ofrece un rendimiento óptimo en diversas aplicaciones.",
        photo: "https://http2.mlstatic.com/D_NQ_NP_615992-MLA40123562044_122019-O.webp"
        },

        {
        categoria: "HELECTRICA",
        nombre: "SIERRA CIRCULAR",
        bulto: "1 UNIDADES",
        marca: "Makita",
        precio: 320,
        id: 14,
        stock: 6,
        descripcion: "La sierra circular Makita es una herramienta potente para cortar madera y otros materiales. Con su guía láser y ajuste de profundidad, te permite obtener cortes precisos y profesionales en tus proyectos de carpintería.",
        photo: "https://buloneraguemes.com.ar/img/articulos/5007NK.jpg"
        },

        {
        categoria: "DE MANO",
        nombre: "JUEGO DE LLAVES",
        bulto: "8 UNIDADES",
        marca: "IRWIN",
        precio: 80,
        id: 15,
        stock: 10,
        descripcion: "El juego de llaves combinadas Irwin incluye una variedad de tamaños para ajustarse a diferentes tuercas y pernos. Con un diseño resistente y acabado cromado, garantiza durabilidad y rendimiento en tus trabajos de mecánica.",
        photo: "https://static.grainger.com/rp/s/is/image/Grainger/3LXP4_AS01?$zmmain$"
        },

        {
          categoria: "HELECTRICA",
          nombre: "CORTADORA CIRCULAR",
          bulto: "1 UNIDADES",
          marca: "Dremel",
          precio: 150,
          id: 16,
          stock: 4,
          descripcion: "La cortadora de círculo Dremel es una herramienta compacta y versátil para cortar formas circulares y rectas en diferentes materiales. Ideal para trabajos de precisión en proyectos de artesanía y manualidades.",
          photo: "https://d3ugyf2ht6aenh.cloudfront.net/stores/649/588/products/torno-dremel-30-acc-eje-flex-dremel-f0133000pu11-6023c20dd97261190015287276689704-640-0.jpg"
        },

        {
          categoria: "DE MANO",
          nombre: "JUEGO ALICATES",
          bulto: "5 UNIDADES",
          marca: "KNIPEX",
          precio: 65,
          id: 17,
          stock: 12,
          descripcion: "El juego de alicates Knipex ofrece una selección de alicates de alta calidad para trabajos de agarre, corte y manipulación. Su diseño ergonómico y resistente proporciona un rendimiento óptimo en aplicaciones industriales.",
          photo: "https://http2.mlstatic.com/D_NQ_NP_902641-MLA49255419200_032022-O.webp"
        },

        {
          categoria: "HELECTRICA",
          nombre: "LIJADORA ORBITAL",
          bulto: "1 UNIDADES",
          marca: "Makita",
          precio: 180,
          id: 18,
          stock: 7,
          descripcion: "La lijadora orbital Makita es una herramienta potente para pulir y lijar superficies. Con su diseño compacto y velocidad variable, te permite lograr acabados suaves y precisos en proyectos de carpintería y acabado.",
          photo: "https://fibarcellona.com.ar/2332-large_default/lijadora-orbital-112x102mm-200w-bo4558-makita-.jpg"
        },

        {
          categoria: "DE MANO",
          nombre: "CINTA METRICA",
          bulto: "10 UNIDADES",
          marca: "Stanley",
          precio: 25,
          id: 19,
          stock: 20,
          descripcion: "La cinta métrica Stanley es una herramienta esencial para medir longitudes y dimensiones con precisión. Su diseño retráctil y gancho magnético facilita su uso en trabajos de construcción y bricolaje.",
          photo: "https://http2.mlstatic.com/D_NQ_NP_609464-MLA52185008489_102022-O.webp"
        },

        {
          categoria: "HELECTRICA",
          nombre: "ATORNILLADOR",
          bulto: "1 UNIDADES",
          marca: "BOSCH",
          precio: 220,
          id: 20,
          stock: 9,
          descripcion: "El taladro atornillador Bosch es una herramienta compacta y versátil para perforar y atornillar. Con su diseño ligero y batería de larga duración, es perfecto para proyectos de montaje y reparaciones en el hogar.",
          photo: "https://arcencohogar.vtexassets.com/arquivos/ids/277504/1110905.jpg?v=637651602844070000"
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