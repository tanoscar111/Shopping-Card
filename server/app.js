const express = require("express");
const app = express();
const cokkieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cokkieParser())
//import router
const product = require("./route/productRoute");
const user = require("./route/userRoute");
app.use("/", product);
app.use("/", user);
//middleware error
app.use(errorMiddleware);
module.exports = app;
