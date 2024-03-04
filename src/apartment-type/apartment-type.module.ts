import { Module } from '@nestjs/common';
import { ApartmentTypeController } from './apartment-type.controller';
import { ApartmentTypeService } from './apartment-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentTypeEntity } from 'src/db/@entity/apartmentTypeEntity';

@Module({
    imports: [TypeOrmModule.forFeature([ApartmentTypeEntity])],
    controllers: [ApartmentTypeController],
    providers: [ApartmentTypeService]
})
export class ApartmentTypeModule { }
