import { Controller, Get, Post, Res, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApartmentTypeDto } from './dto/apartment-type.dto';
import { ApartmentTypeService } from './apartment-type.service';
import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';

@Controller('apartment-type')
@ApiTags('apartment-type')
export class ApartmentTypeController {
    constructor(
        private readonly apartmentTypeService: ApartmentTypeService,
    ) { }

    @Get('/')
    async getAll(): Promise<ApartmentTypeDto[]> {
        return await this.apartmentTypeService.getApartmentTypes();
    }

    @Get('/:id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<ApartmentTypeDto> {
        return await this.apartmentTypeService.getApartmentTypeById(id);
    }

    @Post('/')
    async create(@Res() res, @Body() itemBody: CreateApartmentTypeDto): Promise<ApartmentTypeDto> {
        const createApartmentType = await this.apartmentTypeService.createApartmentType(itemBody);
        return res.status(201).json({
            message: 'Apartment type created successfully',
            createApartmentType,
        });
    }
}
