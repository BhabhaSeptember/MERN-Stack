// require("dotenv").config();
// const User = require("../Models/UserModel");
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token
//   if (!token) {
//     return res.json({ status: false })
//   }

//   //Check if user is authorized for this route by comparing tokens
//   // jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//   //   if (err) {
//   //    return res.json({ status: false })
//   //   } else {
//   //     const user = await User.findById(data.id)
//   //     if (user) return res.json({ status: true, user: user.username })
//   //     else return res.json({ status: false })
//   //   }
//   // });

//   // NEW jwt.verify
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//       console.log("JWT Verification Error:", err);
//       return res.json({ status: false });
//     }
    
//     console.log("JWT Verified:", data);
    
//     const user = await User.findById(data.id);
//     if (user) {
//       return res.json({ status: true, user: user.username });
//     } else {
//       return res.json({ status: false });
//     }
//   });
  

// }





// =========================================================================================

require("dotenv").config();
const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    console.log("No token provided.");
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log("JWT Verification Error:", err);
      return res.json({ status: false });
    }

    console.log("JWT Verified:", data);

    try {
      const user = await User.findById(data.id);
      if (user) {
        console.log("User authenticated:", user.username);
        return res.json({ status: true, user: user.username });
      } else {
        console.log("User not found.");
        return res.json({ status: false });
      }
    } catch (error) {
      console.error("Database error:", error);
      return res.json({ status: false });
    }
  });
};
