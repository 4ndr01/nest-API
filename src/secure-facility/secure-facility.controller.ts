import { Body, Controller, Get, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SecureFacilityDto } from './dto/secure-facility.dto';
import { SecureFacilityService } from './secure-facility.service';
import { CreateSecureFacilityDto } from './dto/create-secure-facility.dto';

@Controller('secure-facility')
@ApiTags('secure-facility')
export class SecureFacilityController {
    constructor(
        private readonly secureFacilityService: SecureFacilityService
    ) { }

    @Get('/')
    async getSecureFacilities(): Promise<SecureFacilityDto[]> {
        return await this.secureFacilityService.getSecureFacilities();
    }

    @Get('/:id')
    async getSecureFacilityById(@Param('id', ParseIntPipe) id: number): Promise<SecureFacilityDto> {
        return await this.secureFacilityService.getSecureFacilityById(id);
    }

    @Post('/')
    async createSecureFacility(@Res() res, @Body() itemBody: CreateSecureFacilityDto): Promise<SecureFacilityDto> {
        const createSecureFacility = await this.secureFacilityService.createSecureFacility(itemBody);
        return res.status(201).json({
            message: 'Secure Facility created successfully',
            createSecureFacility
        });
    }
}
