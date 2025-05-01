import { BadRequestException, Injectable, NotFoundException} from "@nestjs/common";
import { UserService } from "./user.service";
import { comparePassword, hashPassword } from "src/utilities/auth/hashPassword/hashPassword";
import {scrypt as _scrypt, randomBytes} from 'crypto'
import { promisify } from "util";


const scrypt = promisify(_scrypt)



@Injectable()
export class AuthService { 
    constructor(private  userService: UserService) { }
    

    async signup(name, lastname, email: string, password: string){ 
        const salt = randomBytes(8).toString('hex')
        const hash = (await scrypt(password, salt, 32)) as Buffer
        const hashedPassword = salt + '.' + hash.toString('hex')

        const user = await this.userService.addUser(name, lastname, email, hashedPassword)
        return user

    }

    async signin(email: string, password: string){ 
        const [user] = await this.userService.find(email)
        if(!user){ 
            throw new NotFoundException('User not found')
        }

        const [ salt, storedHash ] = user.password.split('.')

        const hash = (await scrypt(password, salt, 32)) as Buffer

        if(storedHash !== hash.toString('hex')){ 
            throw new BadRequestException('Invalid password')
        }

        return user
    }

}