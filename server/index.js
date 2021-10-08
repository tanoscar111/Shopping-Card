import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./router/posts.js";
import usersRouter from "./router/users.js";
import mongoose from "mongoose";
import {} from 'dotenv/config'
const app = express();
const PORT = process.env.port || 5000;
const URI =
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jqebg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);
app.use("/users", usersRouter);
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connect to DB");
    app.listen(PORT, () => {
      console.log("server running", PORT);
    });
  })
  .catch((err) =>
    console.log("🚀 ~ file: index.js ~ line 20 ~ .then ~ err", err)
  );
