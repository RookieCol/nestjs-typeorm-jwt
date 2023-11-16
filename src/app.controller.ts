import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Healthcheck')
@Controller('healthcheck')
export class AppController {
  @Get()
  getHello(): boolean {
    return true;
  }
}
