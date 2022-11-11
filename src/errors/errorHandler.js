function errorHandler(error, req, res, next) {
  const { status = 500, message = "Oops! Something went wrong!" } = error;
  res.status(status).json({ error: message });
}

module.exports = errorHandler;
