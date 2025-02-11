require("dotenv").config();
const jwt = require("jsonwebtoken");

// module.exports.createSecretToken = (id) => {
//   return jwt.sign({ id }, process.env.TOKEN_KEY, {
//     expiresIn: 3 * 24 * 60 * 60, //3days
//   });
// };

console.log("JWT_SECRET:", process.env.JWT_SECRET); // Log to verify it's loaded

module.exports.createSecretToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing! Please check your .env file.");
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d", // 3 days
  });
};