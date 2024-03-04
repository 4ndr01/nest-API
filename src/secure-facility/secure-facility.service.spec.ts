import { Test, TestingModule } from '@nestjs/testing';
import { SecureFacilityService } from './secure-facility.service';

describe('SecureFacilityService', () => {
  let service: SecureFacilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecureFacilityService],
    }).compile();

    service = module.get<SecureFacilityService>(SecureFacilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
