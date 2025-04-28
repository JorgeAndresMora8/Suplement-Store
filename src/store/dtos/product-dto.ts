import { IsBoolean, IsNumber, IsString, isArray } from 'class-validator'

export class CreateProductDto { 
    
    @IsString()
    name: string; 

    @IsNumber()
    price:number;

    @IsString()
    description: string; 

    @IsString()
    stock: number; 

    @IsString()
    images: string[]; 

    @IsString()
    category: string; 

}