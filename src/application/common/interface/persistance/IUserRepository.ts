import { User } from "@root/domain/entities/user";
import { Menu } from "@root/domain/menu/Menu";
import { RegisterUserr } from "@root/infrastructure/persistance/entities/RegisterUser";


export interface IUserRepository{
    
     getUserByEmail(email: string): Promise<RegisterUserr | null>

    add(user: User): void
}