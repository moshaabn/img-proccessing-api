import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.ip);
    next();
};

export default logger;
