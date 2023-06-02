


export class User {

    constructor(FirstName: string, LastName: string, Email:string, Password: string, id?: string) {
        this.id = id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
    }
    public id?: string;
    public FirstName: string;
    public LastName: string;
    public Email: string;
    public Password: string

}