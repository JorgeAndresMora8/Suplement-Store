import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {


    constructor(@InjectRepository(User) private readonly repo: Repository<User>){}

    async findOne(id: any){ 
        if(!id) return null
        const resp = await this.repo.findOneBy({ id })
        return resp
    }

    async find(email: string){ 
        return await this.repo.find({ where: { email } })
    }


    async addUser(name: string, lastname: string, email: string, password: string){ 
        const created_at = new Date().toISOString()
        const last_login = new Date().toISOString()
        const productCreated = await this.repo.create({ name, lastname, email, password, created_at, last_login })
        return await this.repo.save(productCreated)
    }

    async remove(id: any){ 
        const user = await this.findOne(id)
        if(!user) throw new NotFoundException('User not found')
        return await this.repo.remove(user)
    }

    async update(id: any, name: string, lastname: string, email: string, password: string){ 
        const user = await this.findOne(id)
        if(!user) throw new NotFoundException('User not found')
        Object.assign(user, { name, lastname, email, password })
        return await this.repo.save(user)}


        
}
