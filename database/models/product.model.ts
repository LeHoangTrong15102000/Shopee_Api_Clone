import mongoose, { Schema } from 'mongoose'

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 160 },
    image: { type: String, required: true, maxLength: 1000 },
    images: [{ type: String, maxLength: 1000 }],
    description: { type: String },
    category: { type: mongoose.SchemaTypes.ObjectId, ref: 'categories' },
    price: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    price_before_discount: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
)

export const ProductModel = mongoose.model('products', ProductSchema)
