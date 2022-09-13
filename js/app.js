//Carrito de compras en Seccion Productos
let carrito

carrito = JSON.parse(localStorage.getItem("carrito")) || []

//Stock de productos
let productos = []

//Selectores
const cardContainerQuery = document.querySelector("#cardContainer")
const itemsCarritoQuery = document.querySelector("#itemsCarrito")
const vaciarCarrito = document.querySelector("#btnVaciarCarrito")
const botonCompra = document.querySelector(".btn-comprar")

//Funciones

//Funcion para renderizar productos
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
    cardContainerQuery.append(nuevoDiv)
})
    document.querySelectorAll(".botonAgregar").forEach((boton)=>{
        boton.addEventListener("click", agregarProducto)
    })
}

//Funcion para agregar producto al carrito
const agregarProducto = (e) => {
    const idProductoElegido = e.target.getAttribute("data-id")
    const productoElegido = productos.find((producto)=>producto.id==idProductoElegido)//ya tengo el prod elegido
    if (carrito.includes(productoElegido)) {
        productoElegido.cantidad++
    } else {
        carrito.push(productoElegido)
    }
    renderizarItemsCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito))
    Swal.fire({
        icon: 'success',
        title: 'Agregaste este producto!'
    })
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
}

//Mostrar productos elegidos en carrito 
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
        <span class="cardPrice">$${producto.precio}</span>
        <span class="botonCantidad">${producto.cantidad}</span>
        <button class="botonEliminar" data-id=${producto.id} type="button">X</button>`
        itemsCarritoQuery.append(itemsCarrito)
    })
    document.querySelectorAll(".botonEliminar").forEach((boton)=>{
        boton.addEventListener("click", eliminarProducto)
    })
    carritoTotalActualizado()
}

//Total de la compra
const carritoTotalActualizado = () => {
    const importeTotal = document.querySelector(".importeTotal")
    let total = 0
    carrito.forEach(itemCarrito => {
        const precioProducto =  itemCarrito.precio
        total = total + (precioProducto * itemCarrito.cantidad)
        importeTotal.innerHTML = `$${total}.-`
    })
}

//Eliminar un producto
const eliminarProducto = (e) =>{
    const productoIdElegido = e.target.getAttribute("data-id")
    const productoElegido = productos.find((producto)=>producto.id==productoIdElegido)
    productoElegido.cantidad = 1
    carrito = carrito.filter((producto)=>producto.id!=productoIdElegido)
    const importeTotal = document.querySelector(".importeTotal")
    importeTotal.innerHTML= "$0.-"
    renderizarItemsCarrito()  
    carritoTotalActualizado()
}

//Reestablecer cantidad
const reestablecerCantidad = () => {
    carrito.forEach(producto => {
        producto.cantidad=1
    })
}

//Vaciar carrito 
const vaciarCarritoGuardado = () => {
    reestablecerCantidad()
    carrito=[]
    itemsCarritoQuery.innerHTML=""
    localStorage.clear()
    const importeTotal = document.querySelector(".importeTotal")
    importeTotal.innerHTML = "$0.-"
} 

//compra
const compraRealizada = () =>{
    if (carrito.length >= 1) {
            Swal.fire({
                icon: 'success',
                title: 'La compra se realizó exitosamente!'
              }) 
              vaciarCarritoGuardado ()
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Agregá un producto al carrito!'
          })
    }
}

//Listeners
vaciarCarrito.addEventListener("click", vaciarCarritoGuardado)
botonCompra.addEventListener("click",compraRealizada)

