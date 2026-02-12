const express = require("express");
const cors = require("cors");
const dataRoute = require("../routes/dataRoute");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/data", dataRoute);

module.exports = app;