const notFoundMiddleware = (req, res) => {
  res.status(404).send("ROute doesn't exists")
}

export default notFoundMiddleware
