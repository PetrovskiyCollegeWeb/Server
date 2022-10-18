import {Request, Response} from "express";
import * as fs from "fs";
import * as path from "path";

export const getMaps = (req: Request, res: Response) => {
    const pathConfig = path.join(__dirname, '../../../../config/config.json')
    const file: any = fs.readFileSync(pathConfig)
    return res.status(200).json(JSON.parse(file))
}