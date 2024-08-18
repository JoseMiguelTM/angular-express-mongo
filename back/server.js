/**
 * Created by Syed Afzal
 */
//require("./config/config");

require('dotenv').config(); 
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const app = express();

const NODE_PORT = process.env.NODE_PORT || 8080;

//connection from db here
db.connect(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//  adding routes
require("./routes")(app);
app.on("ready", () => {
  app.listen(NODE_PORT, () => {
    console.log("Server is up on port", NODE_PORT);
  });
});

module.exports = app;
