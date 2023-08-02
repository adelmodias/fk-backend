import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

import { AppError } from "../../../../errors/AppError";

const bcrypt = require("bcrypt");

export class UpdateUserUseCase {
    async execute({ id, data }): Promise<User> {
        const userExists = await prisma.user.findUnique({
            where: { id },
        });

        if (!userExists) {
            throw new Error("User not exists!");
        }

        if (data.password) {
            let passwordCrypted = bcrypt.hashSync(data.password, 8);
            data.password = passwordCrypted;
        }

        const userUpdated = await prisma.user.update({
            where: {
                id,
            },
            data: data,
        });

        return userUpdated;
    }
}
