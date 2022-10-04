
const producto = require("../Daos/daoProducto.js");
const router = require('koa-router')
const routerProducto = new router({ prefix: '/api' })

producto.conectarMongo()
routerProducto.get('/productos', async ctx => {
  const todosProductos = await producto.obtenerTodos()
  console.log(todosProductos)
  ctx.body = {
    todosProductos
  }
})



routerProducto.get('/productos/:id', async ctx => {
  const id = ctx.params.id
  const buscado = await producto.obtenerPorId(id)
  ctx.body = {
    buscado
  }
})



routerProducto.get('/productos/cat/:categoria', async ctx => {
  const categoria = ctx.params.categoria
  const categoriaBuscada = await producto.obtenerPorCategoria(categoria)
  ctx.body = {
    categoriaBuscada
  }
})



routerProducto.post('/productos', async ctx => {
  if (
    !ctx.request.body.name ||
    !ctx.request.body.price ||
    !ctx.request.body.image ||
    !ctx.request.body.category ||
    !ctx.request.body.description
  ) {
    ctx.response.status = 400
    ctx.body = {
      status: 'error',
      message: "Falta completar datos"
    }
  }
  else {
    await producto.agregarItem({
      name: ctx.request.body.name,
      price: ctx.request.body.price,
      image: ctx.request.body.image,
      category: ctx.request.body.category,
      description: ctx.request.body.description
    })
    ctx.body = {
      message: "Producto Cargado"
    }
  }
})




routerProducto.put('/productos/:id', async ctx => {
  const id = ctx.params.id
  const data = ctx.request.body
  await producto.actualizarItem(id, data)
  ctx.body = {
    message: "Producto Actualizado"
  }
})


routerProducto.delete('/productos/:id', async ctx => {
  const id = ctx.params.id
  await producto.eliminarItem(id)
  ctx.body = {
    message: "Producto Eliminado"
  }
})

module.exports = routerProducto;
