const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    items: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product', 
      },
      quantity: {
        type: Number,
      }
    }],
    totalPrice: {
      type: Number,
      required: true,
    },
    totalNumOfItems: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Order", orderSchema);
