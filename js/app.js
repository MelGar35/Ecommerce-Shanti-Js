//Carrito de compras

let carrito = []

class Producto {
    constructor(id, producto, descripcion, precio) {
        this.id = id
        this.producto = producto
        this.descripcion = descripcion
        this.precio = precio
    }
}

const producto1 = new Producto (355, 'Porta Sahumerio Hanuman','De ceramica, pintado a mano', 600)
const producto2 = new Producto (356, 'El Tarot como Llave','Autor: Dalia Walker', 4800)
const producto3 = new Producto (357, 'Mazo Tarot Viceversa', 'Autora:Lunaea Weatherstone', 30, 2000)
const producto4 = new Producto (358, 'Oraculo del Gato', 'Autora: La Watson', 1200)
const producto5 = new Producto (359, 'Sahumo Akasha', 'Romero, Lavanda, Canela y palo santo', 1200)

const productos = [producto1, producto2, producto3, producto4, producto5]


// Funcion para que el usuario elija la cantidad de unidades de su producto

const editarProductoElegido = (productoSeleccionado) => {
    const productoElegido = {
        id: productoSeleccionado.id,
        producto: productoSeleccionado.producto,
        descripcion: productoSeleccionado.descripcion,
        cantidad: 0,
        precio: productoSeleccionado.precio,
    }

    productoElegido.cantidad = Number(prompt('Cuantas unidades quiere sumar al carrito?'))

    return productoElegido
}


//Pedimos al usuario que elija que producto quiere comprar
const eleccionProducto = () => {
    const eleccionUsuario = prompt('Elegi el numero de la opcion deseada: Porta Sahumerio, El tarot como llave, Mazo Tarot Viceversa, Oraculo del Gato, Sahumo Akasha').toLowerCase()

    switch (eleccionUsuario) {
        case 'Porta Sahumerio Hanuman':
            console.log('Elegiste Porta Sahumerio Hanuman')
            carrito.push(eleccionProducto(producto1))
            break
        case 'El Tarot como Llave':
            console.log('Elegiste El tarot como llave')
            carrito.push(eleccionProducto(producto2))
            break
        case 'Mazo Tarot Vicevers':
            console.log('Elegiste Mazo Tarot Viceversa')
            carrito.push(eleccionProducto(producto3))
            break
        case 'Oraculo del Gato':
            console.log('Elegiste Oraculo del Gato')
            carrito.push(eleccionProducto(producto4))
            break
        case 'Sahumo Akasha':
            console.log('Elegiste Sahumo Akasha')
            carrito.push(eleccionProducto(producto5))
            break
        default:
            console.log('Por favor, elegi un modelo correcto')
            break
    }

    if (confirm('Desea agregar otro producto a su compra?')) {
        eleccionProducto()
    }
}


//Total de mis productos
const totalCarrito = () => {
    let sumaTotalCarrito = 0
    for (const producto of carrito) {
        sumaTotalCarrito += producto.precio * producto.cantidad
    }
    return sumaTotalCarrito
}


// EJECUCIONES
eleccionProducto()

alert('Gracias por su compra, su total es de $' + totalCarrito())
console.log('Gracias por su compra, su total es de $' + totalCarrito())

