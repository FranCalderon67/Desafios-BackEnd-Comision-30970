const fs = require('fs');
const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const producto = require('./Daos/daoProducto.js');
producto.conectarMongo()
const schemaString = fs.readFileSync('./schema/productos.gql').toString();
const schemaCompilado = buildSchema(schemaString);

const graphMiddleware = graphqlHTTP({
    schema: schemaCompilado,
    rootValue: {
        obtenerProductos: producto.obtenerTodos(),
        obtenerProductoPorId: producto.obtenerPorId(),
        agregarProducto: producto.agregarItem()
    },
    graphiql: true
});

const app = express();
app.use('/graphql', graphMiddleware);

app.listen(3000, () => {
    console.log('Escuchando Graphql')
});