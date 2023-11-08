const multer = require("multer");
const path = require("path");

const publicDirectory = path.join(__dirname, "../public");
const uploadDirectory = path.join(publicDirectory, "uploads");

console.log(uploadDirectory);
// Mendefinisikan gimana cara nyimpen file-nya
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory);
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(
            null,
            file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
        );
    },
});

// // Membuat upload middleware
module.exports = multer({ storage });
