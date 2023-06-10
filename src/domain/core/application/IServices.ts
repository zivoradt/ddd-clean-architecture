
export interface IServices{

    register (name: string, lastname:string, email:string, password:string): any;

    login (Email:string, Password:string): any;
};