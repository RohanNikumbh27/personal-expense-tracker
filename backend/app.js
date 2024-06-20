//entry point
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const { connectToDB } = require("./db/db.js");
const { readdirSync } = require("fs");
const transactionRouter = require("./routes/transaction.js");
const bodyParser = require("body-parser");

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require(`./routes/${route}`))
);

// app
const server = () => {
  connectToDB();
  app.listen(PORT, () => {
    console.log("App is listening on", PORT);
  });
};
server();
