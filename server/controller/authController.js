import { StatusCodes } from "http-status-codes"
import User from "../models/User.js"

const register = async (req, res, next) => {
  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ user })
}

const login = (req, res) => {
  res.send("login user")
}

const updateUser = (req, res) => {
  res.send("update user")
}
export { register, login, updateUser }
