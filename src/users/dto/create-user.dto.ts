import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsString()   
    @IsOptional() 
    bio?: string;
    @IsString()
    @IsOptional()
    image?: string;
}
