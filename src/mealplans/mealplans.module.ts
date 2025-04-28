import { Module } from '@nestjs/common';
import { MealplansController } from './mealplans.controller';
import { MealplansService } from './mealplans.service';

@Module({
  controllers: [MealplansController],
  providers: [MealplansService]
})
export class MealplansModule {}
