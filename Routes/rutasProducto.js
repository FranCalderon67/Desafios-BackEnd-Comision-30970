const { Router } = require("express");
const producto = require("../Daos/daoProducto.js");
const routerProducto = Router();

routerProducto.get('/productos', async (req, res) => {
  res.json(await producto.obtenerTodos())
})

routerProducto.get('/productos/:id', async (req, res) => {
  const id = req.params.id
  const buscado = await producto.obtenerPorId(id);
  res.send(buscado)
})


// routerProducto.get("/home", async (req, res) => {
//   res.json(await producto.obtenerTodos())
// });

routerProducto.get('/productos/cat/:categoria', async (req, res) => {
  const categoria = req.params.categoria;
  const categoriaBuscada = await producto.obtenerPorCategoria(categoria)
  console.log(categoriaBuscada)
  res.send(categoriaBuscada)
})


routerProducto.post("/productos", async (req, res) => {
  const prod = req.body;
  if (prod.nombre === "" || prod.precio === "" || prod.imagen === "" || prod.category === "") {
    res.send(alert('Algunos campos del producto estan vacios'))
  } else {
    await producto.agregarItem(prod);
    res.json(await producto.obtenerTodos())
  }
});

routerProducto.put('/productos/:id', async (req, res) => {
  const id = req.params.id
  const data = req.body
  producto.actualizarItem(id, data)
  res.json(await producto.obtenerTodos())
})

routerProducto.delete('/productos/:id', async (req, res) => {
  const id = req.params.id
  producto.eliminarItem(id)
  res.json(await producto.obtenerTodos())

})

module.exports = routerProducto;
