import path from "path";
import { getOutputPath, resizeImage } from "../services/imageService";

describe('Testing image processing', () => {
    const input = path.resolve("public/images/example.png");
    const wronginput = path.resolve("public/images/exampleImage.png");
    const output = path.resolve(getOutputPath("jpg", "image", 200, 200));
    it('error if the wrong filename is provided', async () => {
        await expectAsync(resizeImage(output, wronginput, 200, 200)).toBeRejected();

    });

    it('success if right extention filename, height and width parameters', async () => {
        await expectAsync(resizeImage(output, input, 200, 200)).toBeResolved();
    });
});