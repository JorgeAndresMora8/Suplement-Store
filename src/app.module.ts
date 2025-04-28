import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { WorkoutModule } from './workout/workout.module';
import { MealplansModule } from './mealplans/mealplans.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './store/product.entity';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type:'sqlite', 
      database: 'db.sqlite',
      entities: [Product, User], 
      synchronize: true
    }), 
    StoreModule, 
    WorkoutModule,
    MealplansModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
