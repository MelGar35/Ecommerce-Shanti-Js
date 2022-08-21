//Logueo usuario en seccion Productos

let datosIngresoSesion = []

const inputMail = document.querySelector("#inputMail")
const inputClave = document.querySelector("#inputClave")
const botonEnviar = document.querySelector("#enviar")

botonEnviar.addEventListener("click", () => {
    datosIngresoSesion.push(inputMail.value)
    datosIngresoSesion.push(inputClave.value)
    inputMail.value = ""
    inputClave.value = ""
    sessionStorage.setItem("datosIngresoSesion", JSON.stringify(datosIngresoSesion))
    console.log(datosIngresoSesion);
})

const datosIngresoGuardados = JSON.parse(sessionStorage.getItem("datosIngresoSesion"))

console.log(datosIngresoGuardados)


//Carrito de compras en Seccion Productos

let carrito = []

const productos = [producto1, producto2, producto3, producto4, producto5]

const cardContainerQuery = document.querySelector("#cardContainer")


productos.forEach((producto) => {
    const nuevoDiv = document.createElement("div")
    nuevoDiv.innerHTML = `
    <h3 class="cardTitle">${producto.producto}</h3><br>
    <img src="${producto.imgSrc}" class="cardImg">
    <p class="cardDesc">${producto.descripcion}</p><br>
    <span class="cardPrice">$${producto.precio}.-</span><br><br>
    <button class="butonCTA" data-id=${producto.id}>Agregar al carrito</button><br>`
    nuevoDiv.className = "card"
    console.log(nuevoDiv)
    cardContainerQuery.append(nuevoDiv)
})

//Evento click sobre botón Agregar al carrito. 

const botonesCarrito = document.querySelectorAll(".butonCTA")

const agregarProducto = (e) => {
    e.target.innerHTML = "Agregaste este producto"

}
botonesCarrito.forEach((boton) => {
    boton.addEventListener("click", agregarProducto)

})

//Contenido carrito nuevo
const itemsCarritoQuery = document.querySelector("#itemsCarrito") //nuevo


    productos.forEach((producto) => {
        const itemsCarrito = document.createElement("div")
        itemsCarrito.className= "itemsCarritoContainer"
        itemsCarrito.classList.add("itemCarrito")
        itemsCarrito.innerHTML = `
    <div class="itemCarrito">
    <img src="${producto.imgSrc}" class="imgCarrito" alt="${producto.modelo}" width="6%">
    <h3 class="cardTitle">${producto.modelo}</h3>
    </div>
    <span class="cardPrice">$${producto.precio}.-</span>
    <input class="botonCantidad" type="number" value="1">
    <button class="botonEliminar" type="button">X</button>`
        itemsCarritoQuery.append(itemsCarrito)

    })

   