import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('building')
@ApiTags('building')
export class BuildingController {
    constructor() {}

    @Get('/')
    async getHello(): Promise<string> {
        return 'Hello World!';
    }
}
