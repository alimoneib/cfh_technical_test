const { OrderModel } = require("../models");

class OrderRepository {
  async findOrders(searchCriteria) {
    return OrderModel.find(searchCriteria);
  }

  async addOrder({ userId, items, totalPrice, totalNumOfItems }) {
    const newOrder = new OrderModel({ userId, items, totalPrice, totalNumOfItems });
    return newOrder.save({})
  }

}
module.exports = new OrderRepository();
