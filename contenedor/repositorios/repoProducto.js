const ProductDaoFactory = require('../../Daos/daoProducto.js')

const Product = require('../../Dtos/productoDto.js');

class ProductRepo {
    constructor() {
        this.productDao = ProductDaoFactory.createProductDao(PERSISTENCE);
    }
    async getAll() {
        try {
            const dtos = await this.productDao.obtenerTodos();
            const chats = dtos.map((dto) => new Product(dto));
            return chats;
        } catch (error) {
            throw new Error("Product Repository Error", error);
        }
    }
    async add(product) {
        try {
            const dto = Product.toDTO(product);
            await this.productDao.agregarItem(dto);
        } catch (error) {
            throw new Error("Product Repository Error", error);
        }
    }
}

module.exports = ProductRepo