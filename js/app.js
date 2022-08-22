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

let carrito

carrito = JSON.parse(localStorage.getItem("carrito")) || [] 

const productos = [producto1, producto2, producto3, producto4, producto5]

const cardContainerQuery = document.querySelector("#cardContainer")

const renderizarProductos=(e)=>{
    e.forEach((producto) => {
    const nuevoDiv = document.createElement("div")
    nuevoDiv.className = "card"
    nuevoDiv.innerHTML = `
    <h3 class="cardTitle">${producto.producto}</h3><br>
    <img src="${producto.imgSrc}" class="cardImg">
    <p class="cardDesc">${producto.descripcion}</p><br>
    <span class="cardPrice">$${producto.precio}.-</span><br><br>
    <button class="botonAgregar" data-id=${producto.id}>Agregar al carrito</button><br>`
    console.log(nuevoDiv)
    cardContainerQuery.append(nuevoDiv)
})
    document.querySelectorAll(".botonAgregar").forEach((boton)=>{
        boton.addEventListener("click", agregarProducto)
    })
}

//Funcion para agregar producto al carrito


const agregarProducto = (e) => {
    const idProductoElegido = e.target.getAttribute("data-id")
    const productoElegido = productos.find((producto)=>producto.id==idProductoElegido)
    carrito.push(productoElegido)
    renderizarItemsCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito))
    Toast.fire({
        icon: 'success',
        title: 'El producto se agrego al carrito!'
      })
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
    console.log(carritoGuardado)
}

//QuerySelector de Carrito 

const itemsCarritoQuery = document.querySelector("#itemsCarrito")

//Mostrar productos en carrito 

const renderizarItemsCarrito=()=>{
    itemsCarritoQuery.innerHTML=""
    carrito.forEach((producto)=>{
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
    <button class="botonEliminar" data-id=${producto.id} type="button">X</button>`

    itemsCarritoQuery.append(itemsCarrito)

    })
    document.querySelectorAll(".botonEliminar").forEach((boton)=>{
        boton.addEventListener("click", eliminarProducto)
    })
}

//Eliminar un producto, se me borra solo si apreto afuera
  

 const eliminarProducto= (e) =>{
   const productoIdElegido = e.target.getAttribute("data-id")
   carrito = carrito.filter((producto)=>producto.id!=productoIdElegido)
   renderizarItemsCarrito()
    
 }


//vaciar carrito 

const vaciarCarrito = document.querySelector("#btnVaciarCarrito")

const vaciarCarritoGuardado = () => {
    carrito=[]
    itemsCarritoQuery.innerHTML=""
}

vaciarCarrito.addEventListener("click", vaciarCarritoGuardado)

//Ejecucion 
 renderizarProductos(productos)