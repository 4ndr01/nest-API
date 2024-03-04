import { Test, TestingModule } from '@nestjs/testing';
import { SecureFacilityController } from './secure-facility.controller';

describe('SecureFacilityController', () => {
  let controller: SecureFacilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecureFacilityController],
    }).compile();

    controller = module.get<SecureFacilityController>(SecureFacilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
