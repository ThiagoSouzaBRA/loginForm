import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService){}

    @Get()
    index() : string {
        return this.loginService.getIndex();
    }

}
