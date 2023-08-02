import { Request, Response } from "express";
import { GetUserByEmailAndPass } from "./GetUserByEmailAndPass";

export class GetUserByEmailAndPassController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const getUsersUseCase = new GetUserByEmailAndPass();

    const result = await getUsersUseCase.execute({ email, password });

    return res.status(201).json(result);
  }
}
