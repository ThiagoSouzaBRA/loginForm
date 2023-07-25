import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  showThiagoPage(): string {
    return this.appService.welcomeThiagoPage();
  }
}
