import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentTypeController } from './apartment-type.controller';

describe('ApartmentTypeController', () => {
  let controller: ApartmentTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartmentTypeController],
    }).compile();

    controller = module.get<ApartmentTypeController>(ApartmentTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
