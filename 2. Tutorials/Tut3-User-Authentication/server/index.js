require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

// const { MONGO_URL, PORT } = process.env;


const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// app.use(cors());

//Manage cookie-based sessions/extract data from cookies
app.use(cookieParser());

//Adds body to req object - JSON structure/data
app.use(express.json());

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

  //========== ROUTES ==========
  app.use("/", authRoute);

// console.log(`Port Number: ${PORT}`);

app.listen(PORT, ()=> {
    console.log(`Server is listening on port: ${PORT}`);
})

