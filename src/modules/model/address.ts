import { IsNotEmpty, IsNumberString } from "class-validator";


export class Address {

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    @IsNumberString()
    number: string;

    @IsNotEmpty()
    @IsNumberString()
    zip: string;

    @IsNotEmpty()
    state: string;

    @IsNotEmpty()
    city: string;
}