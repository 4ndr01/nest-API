import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SecureFacilityEntity } from 'src/db/@entity/secureFacilityEntity';
import { Repository } from 'typeorm';
import { SecureFacilityDto } from './dto/secure-facility.dto';
import { CreateSecureFacilityDto } from './dto/create-secure-facility.dto';

@Injectable()
export class SecureFacilityService {
    constructor(
        @InjectRepository(SecureFacilityEntity)
        private secureFacilityRepository: Repository<SecureFacilityEntity>,
    ) { }

    async getSecureFacilities(): Promise<SecureFacilityEntity[]> {
        return await this.secureFacilityRepository.find();
    }

    async getSecureFacilityById(id: number): Promise<SecureFacilityEntity> {
        return await this.secureFacilityRepository.findOne({ where: { id } });
    }

    async createSecureFacility(facility: CreateSecureFacilityDto): Promise<SecureFacilityEntity> {
        return await this.secureFacilityRepository.save(facility);
    }
}
