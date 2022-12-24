import sharp from "sharp";

const resizeImage = async (
    output: string,
    input: string,
    width: number,
    height: number
) => {
    try {
        await sharp(input)
            .resize({
                width: width,
                height: height,
            })
            .toFile(output);
        return output;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getOutputPath = (
    extension: string,
    filename: string,
    height: number,
    width: number
): string => {
    return `public/images/thumbs/${filename}-${height}-${width}.${extension}`;
};

export { resizeImage, getOutputPath };
