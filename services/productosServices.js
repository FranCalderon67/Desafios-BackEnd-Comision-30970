const productoDao = require('../Daos/daoProducto.js')

const productosServices = {}


productosServices.obtenerTodos = async () => {
    const productos = await productoDao.obtenerTodos()
    return productos
}

productosServices.obtnerPorId = async (id) => {
    const buscado = await productoDao.obtenerPorId(id)
    return buscado
}

productosServices.agregarProducto = async (producto) => {
    const nuevoProducto = await productoDao.agregarItem(producto)
    return (`Producto Agregado ${nuevoProducto}`)
}

productosServices.modificarProducto = async (id, data) => {
    const productoModificado = await productoDao.actualizarItem(id, data)
    return productoModificado
}

productosServices.eliminarProducto = async (id) => {
    const productoElimando = await productoDao.eliminarItem(id)
    return productoDao.obtenerTodos()
}



module.exports = productosServices