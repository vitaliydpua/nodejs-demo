import { Body, Controller, Get, Post } from '@nestjs/common';
import { PositionDto } from './dto/position.dto';
import { PositionsService } from './positions.service';

@Controller('positions')
export class PositionsController {
  constructor(private positionsService: PositionsService) { }

  @Get()
  async people() : Promise<PositionDto[]> {
      return this.positionsService.getAll();
  }

  @Post()
  async createPositions(@Body() positionDto: PositionDto) : Promise<PositionDto> {
      return this.positionsService.create(positionDto);
  }
}
