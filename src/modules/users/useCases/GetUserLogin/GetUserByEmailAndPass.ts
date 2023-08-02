import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

import { AppError } from "../../../../errors/AppError";
import { LoginDTO } from "../../dtos/LoginDTO";

const bcrypt = require("bcrypt");

type UserInput = Omit<User, "password">;

export class GetUserByEmailAndPass {
    async execute({ email, password }: LoginDTO): Promise<UserInput | null> {
        const userExists = await prisma.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                created_at: true,
                updated_at: true,
            },
        });

        if (userExists) {
            var checkPassword: Boolean | undefined = bcrypt.compareSync(password, userExists.password);
        }

        if (!checkPassword) {
            throw new Error("Email or Password incorrect!");
        }

        return userExists;
    }
}
