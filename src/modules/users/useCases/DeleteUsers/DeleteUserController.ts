import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUser";

export class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { email } = req.body;

        const deleteUserUseCase = new DeleteUserUseCase();

        const result = await deleteUserUseCase.execute({ email });

        return res.status(201).json(result);
    }
}
