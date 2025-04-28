import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
@Serialize(UserDto)
export class UserController {

    constructor(private readonly userService: UserService){}

    @Serialize(UserDto)
    @Get('/:id')
    async getUser(@Param('id') id: string){ 
        return await this.userService.findOne(id)
    }

    
    @Get()
    async getUsers(@Query('email') email: string){ 
        return await this.userService.find(email)
    }

    @Post()
    async addUser(@Body() user: CreateUserDto){ 
        const resp = await this.userService.addUser(user.name, user.lastname, user.email, user.password)
        return resp
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto){
        const resp = await this.userService.update(id, user.name, user.lastname, user.email, user.password)
        return resp
    }


    @Delete('/:id')
    async deleteUser(@Param('id') id: string){ 
        const resp = await this.userService.remove(id)
        return resp
    }

}
