const logger = (req, res, next): void => {
    console.log(res.ip);
    next();
};

export default logger;
