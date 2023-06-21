import 'reflect-metadata'
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";


@Entity('RegisterUser')
export class RegisterUserr extends BaseEntity{
    @PrimaryColumn()
    id!: string

    @Column()
    FirstName!: string

    @Column()
    LastName!: string

    @Column()
    Email!: string

    @Column()
    Password!: string

}