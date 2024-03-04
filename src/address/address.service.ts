import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from 'src/db/@entity/addressEntity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
    ) { }

    async getAddresses(): Promise<AddressEntity[]> {
        return await this.addressRepository.find();
    }

    async getAddressById(id: number): Promise<AddressEntity> {
        return await this.addressRepository.findOne({ where: { id } });
    }

    async createAddress(address: CreateAddressDto): Promise<AddressEntity> {
        return await this.addressRepository.save(address);
    }
}
