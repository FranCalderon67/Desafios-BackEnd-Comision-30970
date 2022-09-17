const { obtenerProductos, agregarProducto, modificarProducto, elimiarProducto } = require('./testAPI')
const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest')('http://localhost:8080')


describe('Test de API de productos', () => {
    //Test para obtener todos los productos
    describe('GET', () => {
        it('Deberia traer todos los productos', async () => {
            const response = await request.get('/productos')
            obtenerProductos()
            expect(response.status).to.equal(200)
        })

    })


    //Te dejo estos datos de producto para probar el post

    describe('POST', () => {
        it("Deberia de Agregar un producto nuevo", async () => {
            const response = await request.post('/productos').send(
                agregarProducto({
                    name: 'Captain Rex',
                    image: 'https://i.etsystatic.com/18198560/r/il/4558a5/2210407000/il_fullxfull.2210407000_rg3j.jpg',
                    price: 560,
                    category: 'Personajes'
                }));
            expect(response.status).to.equal(200)
        })
    })


    //La funcion modificarProducto recibe el ID del producto como string y las key que queres modificar/actualizar

    describe('PUT', async () => {
        await it('Deberia de modificar un producto buscado por ID', () => {
            modificarProducto('630fce0a68f613512d6bd38b', {
                name: 'Logo'
            })
        })
    })

    // La funcion eliminar producto recibe el ID del producto como string
    describe('DELETE', async () => {
        await it('Deberia de eliminar un producto buscado por ID', () => {
            elimiarProducto('63261d934a6047a3fc87adfc')
        })
    })
})




