const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");
app.use(express.json());
//import router
const product = require("./route/productRoute");
app.use("/", product);

//middleware error
app.use(errorMiddleware);
module.exports = app;
