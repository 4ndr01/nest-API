import { InjectRepository } from '@nestjs/typeorm';
import { FacilityEntity } from 'src/db/@entity/facilityEntity';
import { Repository } from 'typeorm';
import { CreateFacilityDto } from './dto/create-factility.dto';

export class FacilityService {
    constructor(
        @InjectRepository(FacilityEntity)
        private readonly facilityRepository: Repository<FacilityEntity>,
    ) { }

    async getFacilities(): Promise<FacilityEntity[]> {
        return await this.facilityRepository.find();
    }

    async getFacilityById(id: number): Promise<FacilityEntity> {
        return await this.facilityRepository.findOne({ where: { id } });
    }

    async createFacility(facility: CreateFacilityDto): Promise<FacilityEntity> {
        return await this.facilityRepository.save(facility);
    }
}
