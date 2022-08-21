
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

    const producto1 = new Producto (355, 'Porta Sahumerio Hanuman','../Img/portasahumeriohanuman.jpg', 'hanuman','De cerámica, pintado a mano', 1000)
    const producto2 = new Producto (356, 'El Tarot como Llave','../Img/tarotcomollave.jpg','llave','Autor: Dalia Walker', 4800)
    const producto3 = new Producto (357, 'Mazo Tarot Viceversa','../Img/tarotviceversa.jpg','viceversa', 'Autora:Lunaea Weatherstone', 2500)
    const producto4 = new Producto (358, 'Oráculo del Gato','../Img/oraculodelgato.jpg','oraculo', 'Autora: La Watson', 1200)
    const producto5 = new Producto (359, 'Sahumo Akasha','../Img/sahumos.jpg','sahumo','Romero, Lavanda, Canela y palo santo', 600)