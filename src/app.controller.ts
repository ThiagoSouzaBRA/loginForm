import { Controller, Get, Res, Render, Request, Body, Post, Req} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController{
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('pages/index')
  showPage() {
    return {titulo: 'Principal', nome: 'Thiago PC Test'};
  }

}
