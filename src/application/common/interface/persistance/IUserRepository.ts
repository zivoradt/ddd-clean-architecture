import { User } from "@root/domain/entities/user";
import { Menu } from "@root/domain/menu/Menu";


export interface IUserRepository{
    
    getUserByEmail(email: string): User | null

    add(user: User): void
}