const express = require("express");
const app = express();

app.use(express.json());
//import router
const product = require("./route/productRoute");
app.use("/", product);
module.exports = app;
