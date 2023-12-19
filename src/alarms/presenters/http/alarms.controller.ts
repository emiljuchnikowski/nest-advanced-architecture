import { Body, Controller, Post } from '@nestjs/common';

import { AlarmsService } from '../../application/alarms.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { CreateAlarmCommand } from '../../application/commands/create-alarm.command';

@Controller('alarms')
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @Post()
  create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmsService.create(
      new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.severity),
    );
  }
}