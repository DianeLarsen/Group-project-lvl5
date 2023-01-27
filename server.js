const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const http = require ("http").createServer(app)
const port = 9000;


app.use(express.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://127.0.0.1:27017/neighbordb", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to database");
  }
});


app.use("/lots", require("./routes/lotRouter.js"));
app.use("/posts", require("./routes/postRouter.js"));


app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(port, () => console.log(`The server is running on Port ${port}`));
