import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import randtoken from 'rand-token'
import User from '../models/User'
import dotenv from 'dotenv'

dotenv.config()

const refreshTokensStorage = []

export const login = async (req, res) => {
  console.log('login')
  try {
    // Busco al usuario
    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(404).json({ message: 'El usuario no existe' })
    // Verifico la contraseña
    const result = await bcrypt.compare(req.body.password, user.password)
    if (!result) return res.status(401).json({ message: 'Contraseña incorrecta' })
    // Genero el token con el id del usuario
    const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET, { expiresIn: '1h' })
    const refresh_token = randtoken.generate(16)
    refreshTokensStorage.push({refresh_token, userId: user._id})
    // Retorno los datos
    res.json({token, refresh_token})
  } catch (error) {
    res.status(400).json({
      message: 'Ocurrio un error al loguear el usuario',
      error
    })
  }
}

export const register = async (req, res) => {
  console.log('register')
  try {
    // Creo un hash
    const hash = await bcrypt.hash(req.body.password, 10)
    req.body.password = hash
    // Creo el usuario
    const user = await User.create(req.body)
    // Retorno los datos
    res.json(user)
  } catch (error) {
    res.status(400).json({
      message: 'Ocurrio un error al registrar el usuario',
      error
    })
  }
}

export const user = async (req, res) => {
  // console.log('user')
  try {
    // Verifico el token
    const token = req.headers.authorization.split(' ')[1]
    if (!token) return res.status(401).json({ message: 'No se envio un token' })
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    // Verifico el usuario
    const user = await User.findById(decoded.id)
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
    res.json({user})
  } catch (error) {
    res.status(400).json({
      message: 'Ocurrio un error al obtener el usuario',
      error
    })
  }
}

export const refresh = async (req, res) => {
  // Verifico el refresh token y genero nuevo token
  if (refreshTokensStorage.length) {
    const user = refreshTokensStorage.find(item => item.refresh_token === req.body.refresh_token)
    const token = jwt.sign({id: user.userId}, process.env.TOKEN_SECRET, { expiresIn: '1h' })
    // console.log(token)
    return res.json({token})
  }
  return res.status(404).json({ message: 'Refresh token no encontrado' })
}