require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/Report',
  JWT_SECRET: process.env.JWT_SECRET || 'vfdj9whgfeqjgrejqgureq8u4322u438u1rd9qfe91r4314242mr43mr05t25n6n54oy6o43jyt043u30y046j5j4dsacdasvdaKXISQqodh0fwqf',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '30d',
  NODE_ENV: process.env.NODE_ENV || 'development'
};