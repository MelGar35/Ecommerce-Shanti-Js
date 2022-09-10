
//Llamado a la API
const getAllProductos = async () => {
    try{
        const response = await fetch("../data/productos.json")
        const data = await response.json()
        productos = data
        renderizarProductos(productos)
    }catch{
        Swal.fire(
            'Hubo un problema, intentarlo nuevamente mas tarde',
            '',
            'error'
        )
    }
}

//Ejecuciones
getAllProductos()