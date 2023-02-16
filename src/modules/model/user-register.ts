import { IsEmail, IsMobilePhone, IsNotEmpty, MinLength, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import { Address } from "./address";

export class UserRegister {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsMobilePhone()
    phone: string;

    @ValidateNested({ each: true })
    @Type(() => Address)
    address: Address;
}