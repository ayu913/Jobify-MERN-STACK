import { readFile } from "fs/promises"

import Jobs from "./server/models/Jobs.js"
import connectDB from "./server/db/connect.js"
import dotenv from "dotenv"
dotenv.config()

const MONGODB_URI = process.env.MONGO_URL
const start = async () => {
  try {
    console.log(MONGODB_URI)
    await connectDB(MONGODB_URI)
    await Jobs.deleteMany()
    const jsonProducts = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    )
    await Jobs.create(jsonProducts)
    console.log("Success!!!")
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
