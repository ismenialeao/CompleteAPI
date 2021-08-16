const express = require("express");
const app = express();
const cors = require("cors") //evita erro

const routes = require("./routes/travelsRoutes")

app.use(cors())
app.use(express.json())

app.use("/", routes)

module.exports = app;
