import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity() // Specify the table name if different from the class name
export class Product { 
    
    @PrimaryGeneratedColumn()
    id:number; 

    @Column()
    name: string; 

    @Column()
    price:number;

    @Column()
    description: string; 

    @Column()
    stock: number; 

    @Column()   
    images: string; 

    @Column()
    category: string; 

    @Column()
    slug: string; 

    @Column()
    avaliable: boolean;

}