import { Request, Response } from "express"
import path from "path"

export class AppController {

    async index(req: Request, res: Response){
        res.sendFile(path.resolve('./src/view/index.html'));
    }
}