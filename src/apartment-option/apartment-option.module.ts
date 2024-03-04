import { Module } from '@nestjs/common';
import { ApartmentOptionController } from './apartment-option.controller';
import { ApartmentOptionService } from './apartment-option.service';

@Module({
    imports: [],
    controllers: [ApartmentOptionController],
    providers: [ApartmentOptionService],
})
export class ApartmentOptionModule { }
