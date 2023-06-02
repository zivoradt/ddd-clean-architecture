import { User } from "@root/domain/entities/user";


export interface IUserRepository{
    
    getUserByEmail(email: string): User

    add(user: User): void
}