import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApartmentTypeEntity } from 'src/db/@entity/apartmentTypeEntity';
import { Repository } from 'typeorm';
import { ApartmentTypeDto } from './dto/apartment-type.dto';
import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';

@Injectable()
export class ApartmentTypeService {
    constructor(
        @InjectRepository(ApartmentTypeEntity)
        private readonly apartmentTypeRepository: Repository<ApartmentTypeEntity>,
    ) { }

    async getApartmentTypes(): Promise<ApartmentTypeEntity[]> {
        return await this.apartmentTypeRepository.find();
    }

    async getApartmentTypeById(id: number): Promise<ApartmentTypeEntity> {
        return await this.apartmentTypeRepository.findOne({ where: { id } });
    }

    async createApartmentType(apartmentType: CreateApartmentTypeDto): Promise<ApartmentTypeEntity> {
        return await this.apartmentTypeRepository.save(apartmentType);
    }
}
