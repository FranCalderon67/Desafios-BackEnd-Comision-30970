const { Router } = require('express')
const routerCarrito = Router()
const path = require("path");
const productoDao = require('../Daos/daoProducto.js')
const usuarioDao = require('../Daos/daoUsuario.js')
const { notifyOrder } = require('../config/nodemailer.js')
const { enviarMsnCompra, enviarMsnCompraCliente } = require('../config/twilio.js')

routerCarrito.get('/carrito', async (req, res) => {
    res.render(path.join(process.cwd(), "./public/hbsViews/carrito.hbs"));
})


routerCarrito.post('/carrito/:_id', async (req, res) => {
    const id = req.params._id
    const producto = await productoDao.obtenerPorId(id)

    const activeUser = await usuarioDao.obtenerUsuario(req.session.passport.user.username.email)

    const nuevoCarrito = [...activeUser.carrito, producto]

    await usuarioDao.actualizarItem(activeUser._id, { "carrito": nuevoCarrito })

    res.redirect('/home')
})

routerCarrito.post('/pago', async (req, res) => {
    const activeUser = await usuarioDao.obtenerUsuario(req.session.passport.user.username.email)
    notifyOrder(activeUser)
    enviarMsnCompra(activeUser)
    enviarMsnCompraCliente(activeUser)
    res.redirect('/carrito')
})


module.exports = routerCarrito;