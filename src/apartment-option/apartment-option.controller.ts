import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('apartment-options')
@ApiTags('apartment-options')
export class ApartmentOptionController {
    constructor() { }

    @Get('/')
    async getHello(): Promise<string> {
        return 'Hello World!';
    }
}
