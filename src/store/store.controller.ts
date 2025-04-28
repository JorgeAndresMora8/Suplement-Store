import { Controller, Get, Param, Post, Put, Delete, Body} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateProductDto } from './dtos/product-dto';

@Controller('store')
export class StoreController {

    constructor(private storeService: StoreService){}

    @Put()
    updateProduct(){ 
        return 'updating a product...'
    }

    @Delete()
    deleteProduct(){ 
        return 'deleting a product...'
    }

    @Post()
    async addProduct(@Body() product: CreateProductDto){ 
        const resp = await this.storeService.createProduct(product)
    }

    @Get('/:id')
    async getProduct(@Param('id') id: string){
        const resp = await this.storeService.getProduct(id); 
        return resp
    }

    @Get()
    async productList(){ 
        const resp = await this.storeService.getProducts()
        console.log(resp)
        return resp
    }
}
