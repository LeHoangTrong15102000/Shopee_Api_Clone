import mongoose, { Schema } from 'mongoose'
import { ROLE } from '../../constants/role.enum'

const UserSchema = new Schema(
  {
    email: { type: String, required: true, minLength: 5, maxLength: 120 },
    name: { type: String, required: true, maxLength: 160 },
    password: { type: String, required: true, minLength: 6, maxLength: 160 },
    date_of_birth: { type: Date, maxLength: 160 },
    address: { type: String, maxLength: 160 },
    phone: { type: String, maxLength: 20 },
    roles: { type: [String], required: true, default: [ROLE.USER] },
    avatar: {
      type: String,
      maxLength: 1000,
    },
  },
  {
    timestamps: true,
  }
)

export const UserModel = mongoose.model('users', UserSchema)
