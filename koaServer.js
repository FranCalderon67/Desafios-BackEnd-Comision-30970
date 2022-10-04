const koa = require('koa')
const koaBody = require('koa-body')
const productosRouter = require('./Routes/rutasProducto.js')
const app = new koa()
app.use(koaBody())
app.use(productosRouter.routes())

app.listen(8080, () => {
    console.log('Escuchando KoaServer')
})