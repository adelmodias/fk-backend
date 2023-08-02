import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUser";

export class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id, data } = req.body;

        const updateUserUseCase = new UpdateUserUseCase();

        const result = await updateUserUseCase.execute({ id, data });

        return res.status(201).json(result);
    }
}
