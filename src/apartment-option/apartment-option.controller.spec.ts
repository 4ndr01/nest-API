import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentOptionController } from './apartment-option.controller';

describe('ApartmentOptionsController', () => {
  let controller: ApartmentOptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartmentOptionController],
    }).compile();

    controller = module.get<ApartmentOptionController>(ApartmentOptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
