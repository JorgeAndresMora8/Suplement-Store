import { Test, TestingModule } from '@nestjs/testing';
import { MealplansController } from './mealplans.controller';

describe('MealplansController', () => {
  let controller: MealplansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealplansController],
    }).compile();

    controller = module.get<MealplansController>(MealplansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
