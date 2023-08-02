import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsers";

export class GetUsersController {
    async handle(req: Request, res: Response) {
        const getUsersUseCase = new GetUsersUseCase();

        const result = await getUsersUseCase.execute();

        return res.status(201).json(result);
    }
}
