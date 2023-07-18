import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginService {
    getIndex(): string{
        return "<h1>Welcome to Login Page.</h1>"
    }
}