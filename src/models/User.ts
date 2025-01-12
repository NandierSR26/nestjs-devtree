import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trimg: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trimg: true,
  },
})

const User = mongoose.model('User', userSchema)