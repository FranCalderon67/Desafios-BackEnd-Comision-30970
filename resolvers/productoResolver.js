const servicios = require('../services/productosServices.js')

const obtenerTodos = () => {
    try {
        return servicios.obtenerTodos()
    } catch (error) {
        console.log('ERROR=>', error)
    }
}

const obtenerPorId = (id) => {
    try {
        return servicios.obtnerPorId(id)
    } catch (error) {
        console.log('ERROR=>', error)
    }
}

const nuevoProducto = (producto) => {
    try {
        const nuevoProducto = servicios.agregarProducto(producto)
        return servicios.obtenerTodos()
    } catch (error) {
        console.log('ERROR=>', error)
    }
}

const actualizarProducto = (id, data) => {
    try {
        return servicios.modificarProducto(id, data)
    } catch (error) {
        console.log("ERROR=>", error)
    }
}

const elimnarProducto = (id) => {
    try {
        servicios.eliminarProducto(id)
        return servicios.obtenerTodos()
    } catch (error) {
        console.log('ERROR=>', error)
    }
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    nuevoProducto,
    actualizarProducto,
    elimnarProducto
}