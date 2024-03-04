import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from 'src/db/@entity/personEntity';
import { In, Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonEntity)
        private readonly personRepository: Repository<PersonEntity>,
    ) { }

    async findAll(): Promise<PersonEntity[]> {
        return await this.personRepository.find();
    }

    async findOneById(id: number): Promise<PersonEntity> {
        return await this.personRepository.findOne({ where: { id } });
    }

    async create(person: CreatePersonDto): Promise<PersonEntity> {
        return await this.personRepository.save(person);
    }
}
