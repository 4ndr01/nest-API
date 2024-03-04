import { Module } from '@nestjs/common';
import { FacilityController } from './facility.controller';
import { FacilityService } from './facility.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacilityEntity } from 'src/db/@entity/facilityEntity';

@Module({
    imports: [TypeOrmModule.forFeature([FacilityEntity])],
    controllers: [FacilityController],
    providers: [FacilityService]
})
export class FacilityModule { }
