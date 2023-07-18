import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<b>Hi, my name is Thiago Souza! :)</b>';
  }
}
