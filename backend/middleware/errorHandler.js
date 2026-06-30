const errorHandler = (err, req,res, next) => {
  console.error(err.stack);


  let statusCode = err.statusCode || 500
  if (err.name === 'ValidationError') statusCode = 400
  
    res.status(statusCode).json({
    message: err.message || "something went wrong"
  })
}

module.exports = errorHandler