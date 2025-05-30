const { verifyToken } = require('../utils/jwt');
const User = require('../models/user.model');

const protect = async (req, res, next) => {
  let token;
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  
  if (!token) {
    return res.status(401).json({ 
      success: false,
      message: 'Not authorized to access this route' 
    });
  }
  
  try {
    const decoded = await verifyToken(token);
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'No user found with this id' 
      });
    }
    
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ 
      success: false,
      message: 'Not authorized to access this route' 
    });
  }
};

module.exports = {
  protect
};