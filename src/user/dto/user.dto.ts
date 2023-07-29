import {IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';

//DTO user
export class UserDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(16)
    @MinLength(3)
    username: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(16)
    @MinLength(3)
    password:string;

}
