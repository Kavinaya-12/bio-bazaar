// // // middleware/auth.js
// // const jwt = require('jsonwebtoken');
// // const multer = require('multer');
// // const upload = multer({dest: 'uploads/'});
// // const authenticate = (req, res, next) => {
// //   const token = req.headers['authorization']?.split(' ')[1];
  
// //   if (!token) {
// //     return res.status(401).json({ message: 'No token provided' });
// //   }
  
// //   try {
// //     const decoded = jwt.verify(token, 'your_jwt_secret');
// //     req.user = decoded;
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ message: 'Invalid token' });
// //   }
// // };

// // module.exports = authenticate;
// // middleware/auth.js
// const jwt = require('jsonwebtoken');
// const multer = require('multer');

// // Configure Multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Specify the upload directory
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + '-' + file.originalname); // Use a unique name for each file
//   }
// });

// // Initialize the Multer upload middleware
// const upload = multer({ storage: storage });

// // JWT Authentication middleware
// const authenticate = (req, res, next) => {
//   const token = req.headers['authorization']?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, 'your_jwt_secret');
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// module.exports = {
//   authenticate,
//   upload
// };

const jwt = require('jsonwebtoken');
const multer = require('multer');

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname); // Use a unique name for each file
  }
});

// Initialize the Multer upload middleware
const upload = multer({ storage: storage });

// JWT Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace 'your_jwt_secret' with your actual JWT secret
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = {
  authenticate,
  upload
};

