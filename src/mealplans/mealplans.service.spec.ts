import { Test, TestingModule } from '@nestjs/testing';
import { MealplansService } from './mealplans.service';

describe('MealplansService', () => {
  let service: MealplansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealplansService],
    }).compile();

    service = module.get<MealplansService>(MealplansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
