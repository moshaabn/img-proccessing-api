import sharp from 'sharp';

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
    extention: string,
    filename: string,
    height: number,
    width: number
): string => {
    return `public/images/thumbs/${filename}-${height}-${width}.${extention}`;
};

export { resizeImage, getOutputPath };