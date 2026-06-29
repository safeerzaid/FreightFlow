const jwt =require('jsonwebtoken')

const authMiddleware = (req,res,next) => {
  const authHeader = req.headers.authorization

  if(!authHeader){
    return res.status(401).json({message: "No token provide"})
  }

  const token = authHeader.split(' ')[1];

  try{
    const decod =jwt.verify(token, process.env.JWT_SECRET);
    req.user = decod;
    next();
  }catch(error){
    res.status(401).json({message: 'invalid or expired token'})
  }
}

module.exports = authMiddleware
