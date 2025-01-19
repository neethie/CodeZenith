import { Code } from "./code.model";
import { Request, Response } from "express";

export class CodeController {
    static create = async (req: Request, res: Response) => {
        try {
            const { code, languageId } = req.body;
            const newCode = await Code.create({ code, languageId });
            res.send(newCode.id);
        } catch (error) {
            console.log(error);
        }
    };

    static getAll = async (req: Request, res: Response) => {
        try {
            const codes = await Code.findAll();
            res.send(codes);
        } catch (error) {
            console.log(error);
        }
    };

    static getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const code = await Code.findByPk(id);
            res.send(code);
        } catch (error) {
            console.log(error);
        }
    };
}
