const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // this allows us to have more extra fields
  }
);
//we're going to use the model (this is going to be within the mongo database) t
//the database will add s to the end of the product by default , and it will be in the lower case in the database(products)
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
