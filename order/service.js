const { default: mongoose } = require("mongoose");

const OrderRepository = require("./repository");
const CustomError = require("../middlewares/exception");
const { ProductRepository } = require("../product");

class OrderService {
  async checkProductsQuantity({ items }) {
    return Promise.all(
      items.map(async (item) => {
        const product = await ProductRepository.findProduct({
          _id: item.productId,
        });

        if (item.quantity > product.quantity) {
          throw new CustomError("Not enough quantity", 400);
        }

        return product;
      })
    );
  }

  async addOrder({ items, userId }) {
    if (items.length < 1) {
      throw new CustomError("Cannot find items", 400);
    }

    const products = await this.checkProductsQuantity({ items });
    const productsDict = products.reduce((prev, curr) => {
      if (!prev[curr._id]) {
        prev[curr._id] = curr;
      }
      return prev;
    }, {});

    const session = await mongoose.startSession();
    session.startTransaction();

    const updatedQuantites = {};

    const { totalPrice, totalNumOfItems } = items.reduce(
      (prev, curr) => {
        prev.totalPrice += curr.quantity * productsDict[curr.productId].price;
        prev.totalNumOfItems += curr.quantity;

        updatedQuantites[curr.productId] =
          productsDict[curr.productId].quantity - curr.quantity;

        return prev;
      },
      {
        totalPrice: 0,
        totalNumOfItems: 0,
      }
    );

    const newOrder = await OrderRepository.addOrder({
      userId,
      items,
      totalPrice,
      totalNumOfItems,
    });

    await Promise.all(
      Object.keys(updatedQuantites).map(async (product) => {
        await ProductRepository.updateProduct({
          id: product,
          updatePayload: {
            quantity: updatedQuantites[product],
          },
        });
      })
    );

    return {
      newOrderId: newOrder._id,
    };
  }

  async getOrders({ userId }) {
    return OrderRepository.findOrders({ userId });
  }

}

module.exports = new OrderService();
