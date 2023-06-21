import { User } from '@root/domain/entities/user';
import { IUserRepository } from '@root/application/common/interface/persistance/IUserRepository';
import { DatabaseContext } from '../DBContext';
import {  RegisterUserr } from '../entities/RegisterUser';
import { inject, injectable } from 'tsyringe';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { diContainer } from '@root/dependencies/dependencies';
import { DatabaseConnection } from '@root/databaseSetup';
import { Entity } from '@root/domain/models/Entity';

@injectable()
export class UserRepository implements IUserRepository {

    private  database: DatabaseContext;

    constructor(@inject('DatabaseContext')db: DatabaseContext) {
      this.database = db
    }

    public async add(user: User) {
      const registerUser: RegisterUserr = new RegisterUserr();
      registerUser.id = user.id!;
      registerUser.FirstName = user.FirstName;
      registerUser.LastName = user.LastName;
      registerUser.Email = user.Email;
      registerUser.Password = user.Password;
    
      await this.database.db.save(registerUser)
    }

  public async getUserByEmail(email: string): Promise<any | null> {
    return  await this.database.db.findOneBy({Email: email});
  }

}

