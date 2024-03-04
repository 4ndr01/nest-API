import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('apartment')
@ApiTags('apartment')
export class ApartmentController {
    constructor() {}

    @Get('/')
    async getHello(): Promise<string> {
        return 'Hello World!';
    }
}
