import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { addindProperties } from 'src/utilities/store/addindProperties';

@Injectable()
export class StoreService {

    constructor(
        @InjectRepository(Product)
        private readonly repo: Repository<Product>,
      ) {}

    async getProducts(){ 
        const products = await this.repo.find();
        return products;
    }

    async getProduct(id: any){ 
        const product = await this.repo.findOneBy({id});
        return product;
    }

    async createProduct(product:any){ 
        const newProduct = addindProperties(product)
        const productInstance = await this.repo.create({ ...newProduct });
        return this.repo.save(productInstance)
    }

    async updateProduct(id: any){ 
        const product = await this.repo.findOneBy({id});
        if(!product) return null;
        Object.assign(product, { ...product})
        return this.repo.save(product)
    }

}
