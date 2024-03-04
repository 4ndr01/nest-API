import { Body, Controller, Get, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FacilityDto } from './dto/factility.dto';
import { FacilityService } from './facility.service';
import { CreateFacilityDto } from './dto/create-factility.dto';

@Controller('facility')
@ApiTags('facility')
export class FacilityController {
    constructor(
        private readonly facilityService: FacilityService
    ) { }

    @Get('/')
    async getHello(): Promise<FacilityDto[]> {
        return await this.facilityService.getFacilities();
    }

    @Get('/:id')
    async getFacilityById(@Param('id', ParseIntPipe) id: number): Promise<FacilityDto> {
        return await this.facilityService.getFacilityById(id);
    }

    @Post('/')
    async createFacility(@Res() res, @Body() itemBody: CreateFacilityDto): Promise<FacilityDto> {
        const createFacility = await this.facilityService.createFacility(itemBody);
        return res.status(201).json({
            message: 'Facility created successfully',
            createFacility
        });
    }
}
