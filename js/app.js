//Carrito de compras

let carrito = []

class Producto {
    constructor(id, producto, modelo, descripcion, precio) {
        this.id = id
        this.producto = producto
        this.modelo = modelo
        this.descripcion = descripcion
        this.precio = precio
    
    }
}

    const producto1 = new Producto (355, 'Porta Sahumerio Hanuman', 'hanuman','De ceramica, pintado a mano', 600)
    const producto2 = new Producto (356, 'El Tarot como Llave','llave','Autor: Dalia Walker', 4800)
    const producto3 = new Producto (357, 'Mazo Tarot Viceversa','viceversa', 'Autora:Lunaea Weatherstone', 2500)
    const producto4 = new Producto (358, 'Oraculo del Gato','oraculo', 'Autora: La Watson', 1200)
    const producto5 = new Producto (359, 'Sahumo Akasha','sahumo','Romero, Lavanda, Canela y palo santo', 600)

const productos = [producto1, producto2, producto3, producto4, producto5]


//Elegir cantidad de producto seleccionado 

const editarProductoSeleccionado = (productoSeleccionado) => {
    const productoElegido = {
        cantidad: 1,
        precio: productoSeleccionado.precio,
    }

    productoElegido.cantidad = Number(prompt('Cuantas unidades quiere sumar al carrito?'))

    return productoElegido
}


// Solicitarle al usuario la elección del producto

const eleccionProducto = () => {
    const seleccionUsuario = prompt('Elegi el articulo que deseas comprar: hanuman, llave, viceversa, oraculo, sahumo').toLowerCase()

    switch (seleccionUsuario) {
        case 'hanuman':
            console.log('Elegiste porta sahumerio hanuman')
            carrito.push(editarProductoSeleccionado(producto1))
            break
        case 'llave':
            console.log('Elegiste El tarot como Llave')
            carrito.push(editarProductoSeleccionado(producto2))
            break
        case 'viceversa':
            console.log('Elegiste Mazo Tarot Viceversa')
            carrito.push(editarProductoSeleccionado(producto3))
            break
        case 'oraculo':
            console.log('Elegiste Oraculo del gato')
            carrito.push(editarProductoSeleccionado(producto4))
            break
        case 'sahumo':
            console.log('Elegiste Sahumo Akasha')
            carrito.push(editarProductoSeleccionado(producto5))
             break  
        default:
            console.log('Por favor, elegi un modelo correcto')
            break
    }

    if (confirm('Desea agregar otro producto a su compra?')) {
        eleccionProducto()
    }
}


// Funcion para sumar el total de mis productos
const totalCarrito = () => {
    let sumaTotalCarrito = 0
    for (const producto of carrito) {
        sumaTotalCarrito += producto.precio * producto.cantidad
    }
    return sumaTotalCarrito
}


//Total de la compra
eleccionProducto()

console.log(carrito);
alert('Gracias por su compra, su total es de $' + totalCarrito())
console.log('Gracias por su compra, su total es de $' + totalCarrito())

