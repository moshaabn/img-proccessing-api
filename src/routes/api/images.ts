import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { getOutputPath, resizeImage } from "../../services/imageService";

const images = express.Router();

images.get("/resize", async (req: Request, res: Response) => {
    const height: number = parseInt(req.query.height as unknown as string);
    const width: number = parseInt(req.query.width as unknown as string);
    const inputString: string = req.query.image as unknown as string;
    //read file
    const input = path.resolve(`public/images/${inputString}.jpg`);
    const output = path.resolve(
        getOutputPath("jpg", inputString, width, height)
    );
    if (fs.existsSync(output)) {
        console.log("image accessed ");
        res.sendFile(output);
    }
    try {
        await resizeImage(output, input, width, height);
    } catch (error) {
        console.log(error);
        res.send("error");
    }
    console.log("image processed ");
    res.sendFile(output);
});

export default images;
