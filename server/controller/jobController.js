import { StatusCodes } from "http-status-codes"
import { BadRequestError } from "../errors/index.js"
import Job from "../models/Jobs.js"

const createJob = async (req, res) => {
  const { position, company } = req.body
  if (!position || !company) {
    throw new BadRequestError("Please provides all values")
  }
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
  res.send("create job")
}

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId })

  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
}

const updateJob = async (req, res) => {
  res.send("update job")
}
const deleteJob = async (req, res) => {
  res.send("delete job")
}
const showStats = async (req, res) => {
  res.send("show stats")
}

export { createJob, getAllJobs, updateJob, deleteJob, showStats }
