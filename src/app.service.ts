import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcomeThiagoPage(): string {
    return '<b>Hi, my name is Thiago Souza! :)</b>';
  }
}
