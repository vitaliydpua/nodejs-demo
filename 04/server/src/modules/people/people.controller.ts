import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';
import { Person } from './interfaces/person.interface';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) { }

  @Get()
  async people() : Promise<PersonDto[]> {
      return this.peopleService.getAll();
  }

  @Post()
  async createPerson(@Body() personDto: PersonDto) : Promise<PersonDto> {
      return this.peopleService.create(personDto);
  }
}
