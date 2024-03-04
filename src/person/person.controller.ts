import { Body, Controller, Get, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonDto } from './dto/person.dto';
import { CreatePersonDto } from './dto/create-person.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('person')
@Controller('person')
export class PersonController {
    constructor(
        private readonly personService: PersonService,
    ) { }

    @Get('/')
    async findAll(): Promise<PersonDto[]> {
        return await this.personService.findAll();
    }

    @Get('/:id')
    async findOneById(@Param('id', ParseIntPipe) id: number): Promise<PersonDto> {
        return await this.personService.findOneById(id);
    }

    @Post('/')
    async create(@Res() res, @Body() itemBody: CreatePersonDto): Promise<PersonDto> {
        const createPerson = await this.personService.create(itemBody);
        return res.status(201).json({
            message: 'Person created successfully',
            createPerson,
        });
    }
}
