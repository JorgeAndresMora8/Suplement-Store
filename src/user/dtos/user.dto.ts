import { Expose } from "class-transformer";

export class UserDto { 
    @Expose()
    name: string; 

    @Expose()
    lastname: string; 

    @Expose()
    email: string
}

export class FullUserDto extends UserDto { 
    @Expose()
    password: string; 

    @Expose()
    last_login: string; 

    @Expose()
    created_at: string;
}