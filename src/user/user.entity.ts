import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User { 
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string; 

    @Column()
    lastname: string; 

    @Column()
    email: string; 

    @Column()
    password: string;

    @Column()
    last_login: string;

    @Column()
    created_at: string; 
}