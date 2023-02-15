import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc        Auth user & get token
// @route       GET /api/users/login
// @access      Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc        Register a new user
// @route       POST /api/users
// @access      Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('Users already exists')
  }
  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data!')
  }
})

// @desc        Auth user profile
// @route       GET /api/users/profile
// @access      Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(401)
    throw new Error('User not found')
  }
})

export { authUser, getUserProfile, registerUser }
