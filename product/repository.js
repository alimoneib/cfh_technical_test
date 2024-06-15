const { ProductModel } = require("../models");

class ProductRepository {
  async findProduct(searchCriteria) {
    return ProductModel.findOne(searchCriteria);
  }

  async findProducts(searchCriteria) {
    return ProductModel.find(searchCriteria);
  }

  async addProduct({ name, description, quantity, price }) {
    const newProduct = new ProductModel({ name, description, quantity, price });
    return newProduct.save();
  }

  async updateProduct({ id, updatePayload, session = null}) {
    return ProductModel.updateOne(
      { _id: id },
      {
        $set: {
          ...updatePayload,
        },
      }, session
    );
  }

  async deleteProduct({ id }) {
    return ProductModel.deleteOne({ _id: id });
  }
}
module.exports = new ProductRepository();
