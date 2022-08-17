const path = require('path');
const express = require('express');
const router = require('./router');
const app = express();
const port = process.env.PORT || 3000;
const wr = require('wordreference-api');



module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));