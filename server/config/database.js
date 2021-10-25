const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    })
    .then((data) => {
      console.log(`MongoDB connect with : ${data.connection.host}`);
    })
    .catch((err) => {
      console.log("TCL: err", err);
    });
};

module.exports = connectDatabase;