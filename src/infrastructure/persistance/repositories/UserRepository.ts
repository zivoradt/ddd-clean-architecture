import { User } from '@root/domain/entities/user';
import { IUserRepository } from '@root/application/common/interface/persistance/IUserRepository';
import { DatabaseContext } from '../DBContext';
import {  RegisterUserr } from '../entities/RegisterUser';
import { inject, injectable } from 'tsyringe';
import { Repository } from 'typeorm';

@injectable()
export class UserRepository implements IUserRepository {

    private  dbContext: Repository<RegisterUserr>;

    constructor(@inject("DatabaseContext")_db: DatabaseContext) {
      this.dbContext = _db.getManager().getRepository(RegisterUserr)
    }

    public async add(user: User) {
      const registerUser: RegisterUserr = new RegisterUserr();
      registerUser.id = user.id!;
      registerUser.FirstName = user.FirstName;
      registerUser.LastName = user.LastName;
      registerUser.Email = user.Email;
      registerUser.Password = user.Password;
    
      await registerUser.save(); 
    }

  public async getUserByEmail(email: string): Promise<any | null> {
    return  await RegisterUserr.findOneBy({Email: email});
  }

}

