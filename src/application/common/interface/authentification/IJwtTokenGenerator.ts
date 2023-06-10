import { User } from "@root/domain/entities/user";

export interface IJwtTokenGenerator{

    generateToken(user: User): string
}