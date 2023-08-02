import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

import { AppError } from "../../../../errors/AppError";

export class DeleteUserUseCase {
    async execute({ email }): Promise<User> {
        const userExists = await prisma.user.findUnique({
            where: { email },
        });

        if (!userExists) {
            throw new Error("User not exists!");
        }

        const userDeleted = await prisma.user.delete({
            where: { email },
        });

        return userDeleted;
    }
}
