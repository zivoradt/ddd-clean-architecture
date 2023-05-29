

export interface IJwtTokenGenerator{

    generateToken(userId: string, firstName: string, lastName: string): string
}