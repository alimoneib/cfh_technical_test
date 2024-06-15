const ProductValidation = require("./validation");
const ProductService = require("./service");

class ProductController {
  async getProducts(req, res, next) {
    try {
      const validationResult = ProductValidation.getSchema.validate(req.query);
      if (validationResult.error) {
        throw validationResult.error;
      }
      const { names } = validationResult.value;

      const namesArray = names && names.length > 0 ? names.split(",") : [];

      const products = await ProductService.getProducts({
        names: namesArray,
      }).catch((e) => {
        throw e;
      });
      Object.assign(res, {
        data: products,
        message: "Get Products",
      });
      next();
    } catch (error) {
      next(error);
    }
  }

  async addProduct(req, res, next) {
    try {
      const validationResult = ProductValidation.addSchema.validate(req.body);
      if (validationResult.error) {
        throw validationResult.error;
      }
      const { name, description, quantity, price } = validationResult.value;

      const newProduct = await ProductService.addProduct({
        name,
        description,
        quantity,
        price,
      }).catch((e) => {
        throw e;
      });
      Object.assign(res, {
        data: newProduct,
        message: "Add Product",
      });
      next();
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const validationResult = ProductValidation.updateSchema.validate(
        req.body
      );
      if (validationResult.error) {
        throw validationResult.error;
      }
      const { id, name, description, quantity, price } = validationResult.value;

      await ProductService.updateProduct({
        id,
        updatePayload: { name, description, quantity, price },
      }).catch((e) => {
        throw e;
      });
      Object.assign(res, {
        data: { productId: id },
        message: "Update Product",
      });
      next();
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const validationResult = ProductValidation.deleteSchema.validate(
        req.query
      );
      if (validationResult.error) {
        throw validationResult.error;
      }
      const { id } = validationResult.value;

      await ProductService.deleteProduct({
        id,
      }).catch((e) => {
        throw e;
      });
      Object.assign(res, {
        data: {},
        message: "Delete Product",
      });
      next();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
