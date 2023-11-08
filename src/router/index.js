"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CarModel_1 = require("./../models/CarModel");
const upload = require("./../../src/upload.js");
const uploadOnMemory = require("./../../src/uploadOnMemory.js");
const cloudinary = require("./../../src/cloudinary.js");
const CLOUDINARY_DIR = "bcr-management-dashboard";
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.json({
        status: "success",
        message: 'Hello Sayang:)'
    });
});
exports.router.get('/cars', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            status: "success",
            message: 'Data seluruh mobil berhasil ditemukan!',
            data: yield CarModel_1.CarModel.all(),
        });
    }
    catch (error) {
        res.status(500).json({
            status: "failed",
            message: 'Internal Server Error',
        });
    }
}));
exports.router.get('/cars/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        res.status(400).json({
            status: "failed",
            message: 'Bad Request',
        });
    }
    try {
        res.json({
            status: "success",
            message: `Data mobil dengan id: ${req.params.id} berhasil ditemukan!`,
            data: yield CarModel_1.CarModel.findById(req.params.id),
        });
    }
    catch (error) {
        res.status(500).json({
            status: "failed",
            message: 'Internal Server Error',
        });
    }
}));
exports.router.post("/cars", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            status: "success",
            message: 'Data mobil berhasil disimpan!',
            data: yield CarModel_1.CarModel.insert(req.body)
        });
    }
    catch (error) {
        if (typeof error === "string") {
            res.status(500).json({ message: 'Error' });
        }
        else if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Error' });
        }
    }
}));
exports.router.put('/cars/:id/edit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        res.status(400).json({
            status: "failed",
            message: 'Bad Request',
        });
    }
    try {
        res.json({
            status: "success",
            message: 'Data mobil berhasil diubah!',
            data: yield CarModel_1.CarModel.update(req.params.id, req.body),
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}));
exports.router.delete('/cars/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        res.status(400).json({
            status: "failed",
            message: 'Bad Request',
        });
    }
    try {
        const status = yield CarModel_1.CarModel.delete(req.params.id);
        res.json({
            status: "success",
            data: Boolean(status),
            message: `Data mobil dengan id: ${req.params.id} berhasil dihapus!`
        });
    }
    catch (error) {
        res.status(500).json({
            status: "failed",
            message: 'Internal Server Error',
        });
    }
}));
// IMAGE UPLOAD HANDLER
exports.router.post("/cars/picture", 
// Unused as of now
upload.single("picture"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/uploads/${req.file.filename}`;
    res
        .status(201)
        .json({ message: `Gambar berhasil di-upload, gas cek URL: ${url}` });
}));
exports.router.post("/cars/picture/cloudinary", uploadOnMemory.single("picture"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const public_id = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;
    cloudinary.uploader
        .upload(file, {
        height: 160, width: 270, crop: "fit",
        folder: "bcr-management-dashboard", public_id: public_id
    })
        .then((result) => {
        res.status(201).json({
            status: "success",
            message: "Gambar berhasil diupload",
            url: result.url,
            public_id: public_id
        });
    })
        .catch((err) => {
        res.status(422)
            .json({
            status: "failed",
            message: `Gambar gagal diupload: ${err.message}`
        });
    });
}));
