import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('tenant')
@ApiTags('tenant')
export class TenantController {
    constructor() {}

    @Get('/')
    async getHello(): Promise<string> {
        return 'Hello World!';
    }
}
