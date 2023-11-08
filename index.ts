require('dotenv').config();
const express = require("express");
const app  = express();
const bodyParser = require("body-parser");
const cors = require("cors");
import { router } from './src/router/index';
const PORT: string | number = process.env.PORT || 9999;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use('/api/v1', router);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
});