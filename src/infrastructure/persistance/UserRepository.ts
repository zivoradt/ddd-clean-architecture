import { User } from '@root/domain/entities/user';
import { IUserRepository } from '@root/application/common/interface/persistance/IUserRepository';


export class UserRepository implements IUserRepository {

    private  users: User[] = []

    public add(user: User) {
        
        this.users.push(user);
       
    }

  public getUserByEmail(email: string): User | null {
    return this.users.find(user=> user.Email == email) ?? null;
  }

}

