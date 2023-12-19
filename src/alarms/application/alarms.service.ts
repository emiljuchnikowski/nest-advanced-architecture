import { Injectable } from '@nestjs/common';
import { CreateAlarmCommand } from "./commands/create-alarm.command";

@Injectable()
export class AlarmsService {
  findAll() {
    return `This action returns all alarms`;
  }

  create(command: CreateAlarmCommand) {

  }
}
