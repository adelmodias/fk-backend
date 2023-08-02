import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUser";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        console.log("req => ", req.body);

        const { name, email, password } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({ name, email, password });

        return res.status(201).json(result);
    }
}
