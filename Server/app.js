require("dotenv").config();

const express = require('express');
const cors = require('cors');
const corsConfig = require('./settings/serverSettings');
const app = express();
const SubRouter = require('./Router/SubRouter')


app.use(
    cors(
        corsConfig
    )
)

app.use(express.json())
app.use('/',SubRouter)

module.exports = app