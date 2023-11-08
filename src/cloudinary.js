// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dbgg8ltsd',
    api_key: '916651983286467',
    api_secret: 'bbFd7K--OIQz3M0H5c7B3-Hkg9Y',
    secure: true,
});
module.exports = cloudinary;
