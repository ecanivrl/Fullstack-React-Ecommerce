const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema(
  {
    text: { type: String, required: true },
    rating: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true }
);

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: [{ type: String, required: true }],
    reviews: [ReviewSchema],
    description: { type: String, required: true },
    colors: [{ type: String, required: true }],
    sizes: [{ type: String, required: true }],
    price: {
      current: { type: Number, required: true },
      discount: { type: Number, required: true },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },

    category: { type: String, required: true },
    stock: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;