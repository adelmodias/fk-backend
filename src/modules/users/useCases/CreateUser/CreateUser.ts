import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

import { AppError } from "../../../../errors/AppError";

import { CreateUserDTO } from "../../dtos/CreateUserDTO";

const bcrypt = require("bcrypt");

export class CreateUserUseCase {
    async execute({ name, email, password }: CreateUserDTO): Promise<User> {
        // Verificar se o user já existe
        const userExists = await prisma.user.findUnique({
            where: { email },
        });

        if (userExists) {
            // throw new Error("User already exists!");
            throw new Error("User already exists!");
        }

        // Criar o usuário
        let passwordCrypted = bcrypt.hashSync(password, 8);

        console.log(name, email, password);
        console.log("passwordCrypted => ", passwordCrypted);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: passwordCrypted,
            },
        });

        return user;
    }
}
