require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/FirstLocal")
    .then(() => console.log("Mongo connected!"));

const TaskRoute = require("./Routes/TaskRoute");

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
//     res.setHeader("Access-Control-Allow-Headers","Content-Type");
//     next();
// });

app.use("/Task", TaskRoute);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))