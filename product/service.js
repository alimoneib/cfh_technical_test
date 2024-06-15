const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const ProductRepository = require("./repository");
const CustomError = require("../middlewares/exception");

class ProductService {
  async addProduct({ name, description, quantity, price }) {
    const existingProduct = await ProductRepository.findProduct({ name: name });

    if (existingProduct) {
      throw new CustomError("Product already exists", 400);
    }

    const { _id } = await ProductRepository.addProduct({
      name, description, quantity, price
    });

    return {
      newProductId: _id,
    };
  }

  async updateProduct({id, updatePayload}) {
    return ProductRepository.updateProduct({ id, updatePayload });
  }

  async getProducts({ names = [] }) {
    const searchCriteria = names.length > 0 ? {
      name: {
        $in: names,
      },
    } : {}
    return ProductRepository.findProducts(searchCriteria)
  }

  async deleteProduct({ id }) {
    return ProductRepository.deleteProduct({id})
  }
}

module.exports = new ProductService();
