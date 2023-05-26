

export interface AuthResult{
    id: string,
    FirstName: string,
    LastName: string,
    Email: string,
    Token: string
}



export interface IServices{

    register (name: string, lastname:string, email:string, password:string): any;

    login (Email:string, Password:string): any;
};