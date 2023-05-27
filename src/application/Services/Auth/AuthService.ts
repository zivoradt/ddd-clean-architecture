import { AuthResult, IServices } from "@root/domain/core/application/IServices";
import { injectable } from "tsyringe";
@injectable()
export class AuthService implements IServices{

    public async register(FirstName: string, LastName: string, Email: string, Password: string ): Promise<AuthResult> {
        try {
            const dto: AuthResult = {
                id: "",
                FirstName: FirstName,
                LastName: LastName,
                Email: Email,
                Token: "" 
            }
            return dto as AuthResult;
        } catch (error) {
           throw new Error('Registration failed');
        }
        ;
    }

    public login(Email: string, Password: string):any {
        
        try {
            
            const dto: AuthResult = {
                id: "",
                FirstName: "",
                LastName: "",
                Email: Email,
                Token: "" 
            }
            return dto;
        } catch (error) {
            throw new Error('Registration failed');
        }
    }
}
