import { Body, Controller, Get, HttpStatus, Post, Res, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddressDto } from './dto/address.dto';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('address')
@ApiTags('address')
export class AddressController {
    constructor(
        private readonly addressService: AddressService,
    ) { }

    @Get('/')
    async adresses(): Promise<AddressDto[]> {
        return await this.addressService.getAddresses();
    }

    @Get('/:id')
    async addressById(@Param('id', ParseIntPipe) id: number): Promise<AddressDto> {
        return await this.addressService.getAddressById(id);
    }

    @Post('/')
    async createAddress(@Res() res, @Body() postItem: CreateAddressDto): Promise<AddressDto> {
        const createdItem = await this.addressService.createAddress(postItem);
        return res.status(HttpStatus.OK).json({
            message: 'Address has been created successfully',
            createdItem,
        });
    }
}