
//Logueo usuario en seccion Productos

let datosIngresoSesion = []

const inputMail = document.querySelector("#inputMail")
const inputClave = document.querySelector("#inputClave")
const botonEnviar = document.querySelector("#enviar")

botonEnviar.addEventListener("click", ()=>{
    datosIngresoSesion.push(inputMail.value)
    datosIngresoSesion.push(inputClave.value)
    inputMail.value = ""
    inputClave.value = ""
    sessionStorage.setItem("datosIngresoSesion", JSON.stringify(datosIngresoSesion))
    console.log(datosIngresoSesion);
} )

const datosIngresoGuardados = JSON.parse(sessionStorage.getItem("datosIngresoSesion"))

console.log(datosIngresoGuardados)


//Carrito de compras en Seccion Productos

let carrito = []

class Producto {
    constructor(id, producto, imgSrc, modelo, descripcion, precio) {
        this.id = id
        this.producto = producto
        this.imgSrc = imgSrc
        this.modelo = modelo
        this.descripcion = descripcion
        this.precio = precio
    }
}

    const producto1 = new Producto (355, 'Porta Sahumerio Hanuman','../Img/portasahumeriohanuman.jpg', 'hanuman','De ceramica, pintado a mano', 600,)
    const producto2 = new Producto (356, 'El Tarot como Llave','../Img/tarotcomollave.jpg','llave','Autor: Dalia Walker', 4800)
    const producto3 = new Producto (357, 'Mazo Tarot Viceversa','../Img/tarotviceversa.jpg','viceversa', 'Autora:Lunaea Weatherstone', 2500)
    const producto4 = new Producto (358, 'Oraculo del Gato','../Img/oraculodelgato.jpg','oraculo', 'Autora: La Watson', 1200)
    const producto5 = new Producto (359, 'Sahumo Akasha','../Img/sahumos.jpg','sahumo','Romero, Lavanda, Canela y palo santo', 600)


const productos = [producto1, producto2, producto3, producto4, producto5]

const cardContainerQuery = document.querySelector("#cardContainer")

productos.forEach ((producto)=> {
    const nuevoDiv = document.createElement("div")
    nuevoDiv.innerHTML= `
    <h3 class="cardTitle">${producto.producto}</h3><br>
    <img src="${producto.imgSrc}" class="cardImg">
    <p class="cardDesc">${producto.descripcion}</p><br>
    <span class="cardPrice">$${producto.precio}</span><br><br>
    <button class="butonCTA" data-id=${producto.id}>Agregar al carrito</button><br>`
    nuevoDiv.className = "card"
    console.log(nuevoDiv)
    cardContainerQuery.append(nuevoDiv)
})

//Evento click sobre botón Agregar al carrito. 

const botonesCarrito = document.querySelectorAll(".butonCTA") 


const agregarProducto = (e) => {
    e.target.innerHTML= "Agregaste este producto"
    console.log(e.target);
}

botonesCarrito.forEach((boton) => {
    boton.addEventListener("click", agregarProducto)
})



