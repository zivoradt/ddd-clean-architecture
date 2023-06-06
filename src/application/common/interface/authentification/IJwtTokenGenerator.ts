import { User } from "@root/domain/entities/user";
import { injectable } from "tsyringe";


export interface IJwtTokenGenerator{

    generateToken(user: User): string
}