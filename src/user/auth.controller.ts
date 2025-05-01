import { Body, Controller, Get, NotFoundException, Post, Session, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { LoginUserDto } from "./dtos/login-user.dto";
import { Serialize, SerializerInterceptor } from "src/interceptors/serializer.interceptor";
import { UserDto } from "./dtos/user.dto";
import { UserService } from "./user.service";
import { currentUser } from "./decorators/current-user.decorator";
import { CurrentUserInterceptor } from "./interceptors/current-user.interceptor";
import { User } from "./user.entity";
import { AuthGuard } from "src/guards/AuthGuard";


@UseInterceptors(CurrentUserInterceptor)
@Controller('auth')
@Serialize(UserDto)
export class AuthController { 


    constructor(private authService: AuthService, private userService: UserService){}

    @Get('whoami')
    @UseGuards(AuthGuard)
    async whoAmI(@currentUser() user: User){ 
        return user
    }

    @Post('logout')
    async logout(@Session() session: any){ 
        session.userId = null
        return { message: 'Logged out successfully' }
    }

    @Get('get-user')
    async getUser(@Session() session:any){ 
        console.log(session.userId)
        const user = await this.userService.findOne(session.userId)
        if(!user) throw new NotFoundException('your not logged in')
        return user

    }

    @Post('signin')
    async login(@Body() user: LoginUserDto, @Session() session: any){ 
        const resp = await this.authService.signin(user.email, user.password)
        session.userId = resp.id
        console.log(session)
        return resp
    }

    @Post('signup')
    async register(@Body() user: CreateUserDto, @Session() session: any){ 
        const resp = await this.authService.signup(user.name, user.lastname, user.email, user.password)
        session.userId = resp.id
        console.log(session)
        return resp
    }
}