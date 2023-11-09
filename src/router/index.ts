import { Router } from 'express';
import type { Request, Response } from 'express';
import { CarModel, CarType } from './../models/CarModel';

const upload = require("./../../src/upload.js");
const uploadOnMemory = require("./../../src/uploadOnMemory.js");
const cloudinary = require("./../../src/cloudinary.js");
const { v4: uuidv4 } = require('uuid');

const CLOUDINARY_DIR = "bcr-management-dashboard"

export const router = Router();

interface MulterRequest extends Request {
    file: any;
}

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello Sayang:)'
    });
});

router.get('/cars', async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            message:'Data seluruh mobil',
            data: await CarModel.all(),
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

router.get('/cars/:id', async (req: Request, res: Response) => {
    if (!req.params.id) {
        res.status(400).json({
            message: 'Bad Request',
        });
    }
    try {
        res.status(200).json({
            message:`Data mobil dengan id: ${req.params.id}`,
            data: await CarModel.findById<CarType>(req.params.id),
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

router.post("/cars", upload.single('img_url'), async (req: Request, res: Response): Promise<any> => {
    interface CarData {
        name: string;
        size: string;
        rent_per_day: number;
        img_id: string;
        img_url: string;
    }
    try {
        const url:string = `/uploads/${(req as MulterRequest).file.filename}`;
        req.body.img_url = url;
        req.body.img_id = uuidv4();
        res.status(201).json({
            message:'Data mobil berhasil disimpan!',
            data: await CarModel.insert<CarData, CarType>(req.body)
        })
    } catch (error:unknown) {
        if (typeof error === "string") {
            res.status(500).json({ message: 'Error' });
        } else if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error' });
        }

    }
});

router.put('/cars/:id/edit', upload.single('img_url'), async (req: Request, res: Response): Promise<any> => {
    interface CarData {
        id: number;
        name: string;
        size: string;
        rent_per_day: number;
        img_id: string;
        img_url: string;
    }
    if (!req.params.id) {
        res.status(400).json({
            message: 'Bad Request',
        });
    }
    try {
        if(req.body.url !== undefined){
            const url:string = `/uploads/${(req as MulterRequest).file.filename}`;
            req.body.img_url = url;
            req.body.img_id = uuidv4();
        }
        res.status(201).json({
            message:'Data mobil berhasil diubah!',
            data: await CarModel.update<CarData, CarType>(req.params.id, req.body),
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

router.delete('/cars/:id', async (req: Request, res: Response) => {
    if (!req.params.id) {
        res.status(400).json({
            message: 'Bad Request',
        });
    }
    try {
        const status:number = await CarModel.delete(req.params.id)
        res.status(201).json({
            data: Boolean(status),
            message: `Data mobil dengan id: ${req.params.id} berhasil dihapus!`
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

// IMAGE UPLOAD HANDLER
router.post("/cars/picture",
    // Unused as of now
    upload.single("picture"),
    async (req: Request, res: Response): Promise<any> => {
        const url = `/uploads/${(req as MulterRequest).file.filename}`;
        res
            .status(201)
            .json({ message: `Gambar berhasil di-upload, gas cek URL: ${url}`});
    }
);
router.post("/cars/picture/cloudinary",
    uploadOnMemory.single("picture"),
    async (req: Request, res: Response): Promise<any> => {
        const public_id = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const fileBase64 = (req as MulterRequest).file.buffer.toString("base64");
        const file = `data:${(req as MulterRequest).file.mimetype};base64,${fileBase64}`;

        cloudinary.uploader
            .upload(file, {
                height: 160, width: 270, crop: "fit",
                folder: "bcr-management-dashboard", public_id: public_id
            })
            .then((result: any) => {
                res.status(201).json({
                    status: "success",
                    message: "Gambar berhasil diupload",
                    url: result.url,
                    public_id: public_id
                });
            })
            .catch((err: any) => {
                res.status(422)
                    .json({
                        status: "failed",
                        message: `Gambar gagal diupload: ${err.message}`
                    })
            })
    }
);

