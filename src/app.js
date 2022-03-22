// 3rd Party Library
const express = require('express');
const env = require('dotenv');

const app = new express();
const config = env.config();

app.listen(3000);