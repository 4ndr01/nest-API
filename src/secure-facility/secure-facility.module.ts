import { Module } from '@nestjs/common';
import { SecureFacilityController } from './secure-facility.controller';
import { SecureFacilityService } from './secure-facility.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecureFacilityEntity } from 'src/db/@entity/secureFacilityEntity';

@Module({
    imports: [TypeOrmModule.forFeature([SecureFacilityEntity])],
    controllers: [SecureFacilityController],
    providers: [SecureFacilityService]
})
export class SecureFacilityModule { }
