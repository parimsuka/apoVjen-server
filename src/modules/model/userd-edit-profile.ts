import { IsEmail, IsMobilePhone, IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import { Address } from "./address";

export class UserEditProfile {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsMobilePhone()
    phone: string;

    @ValidateNested({ each: true })
    @Type(() => Address)
    address: Address;
}