import { Schema, model } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email requerido']
  },
  password: {
    type: String,
    required: [true, 'Password requerido']
  }
}, {
  collection: 'users',
  timestamps: true,
  versionKey: false
})

userSchema.plugin(uniqueValidator, { message: 'El email ingresado ya existe.' })

export default model('User', userSchema)