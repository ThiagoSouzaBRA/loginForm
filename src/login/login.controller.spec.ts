import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

describe('LoginController', () => {
  let _LoginController: LoginController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [LoginService]
    }).compile();

    _LoginController = app.get<LoginController>(LoginController);
  });

  it('should be defined', () => {
    expect(_LoginController).toBeDefined();
  });


});