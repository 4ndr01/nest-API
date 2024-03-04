import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('owner')
@ApiTags('owner')
export class OwnerController {
    constructor() {}

    @Get('/')
    async getHello(): Promise<string> {
        return 'Hello World!';
    }
}
