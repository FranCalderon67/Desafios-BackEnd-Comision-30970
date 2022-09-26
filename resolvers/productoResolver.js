const servicios = require('../services/productosServices.js')

const obtenerTodos = async () => {
    try {
        return await servicios.obtenerTodos()
    } catch (error) {
        console.log('ERROR=>', error)
    }
}

const obtenerPorId = async (id) => {
    try {
        return await servicios.obtnerPorId(id)
    } catch (error) {
        console.log('ERROR=>', error)
    }
}

const nuevoProducto = async (producto) => {
    try {
        const nuevoProducto = await servicios.agregarProducto(producto)
        return (`Producto Agregado ${nuevoProducto}`)
    } catch (error) {
        console.log('ERROR=>', error)
    }
}

const actualizarProducto = async (id, data) => {
    try {
        return await servicios.modificarProducto(id, data)
    } catch (error) {
        console.log("ERROR=>", error)
    }
}

const elimnarProducto = async (id) => {
    try {
        await servicios.eliminarProducto(id)
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