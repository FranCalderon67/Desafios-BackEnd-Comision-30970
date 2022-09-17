const axios = require('axios').default
axios.options({
    host: 'localhost',
    port: 8080,
    protocol: 'https'
})



const obtenerProductos = async () => {
    try {
        const todosLosProductos = await axios.get('http://localhost:8080/productos')
        return todosLosProductos
    } catch (error) {
        console.log('ERROR=>', error)
    }
}

const agregarProducto = async (obj) => {
    try {
        const nuevoProducto = await axios.post('http://localhost:8080/productos', obj)
        return nuevoProducto
    } catch (error) {
        console.log('ERROR=>', error)
    }
}


const modificarProducto = async (_id, mods) => {
    try {
        const productoActualizado = await axios.put(`http://localhost:8080/productos/${_id}`, mods)
        return productoActualizado
    } catch (error) {
        console.log('ERROR=>', error)
    }
}


const elimiarProducto = async (_id) => {
    try {
        await axios.delete(`http://localhost:8080/productos/${_id}`)
        return obtenerProductos()
    } catch (error) {
        console.log('ERROR=>', error)
    }
}

module.exports = {
    obtenerProductos,
    agregarProducto,
    modificarProducto,
    elimiarProducto,
}