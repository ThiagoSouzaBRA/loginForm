import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path'
import { json } from 'body-parser'
async function bootstrap() {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //Json
  app.use(json({limit: '10mb'}))
  //Cors
  app.enableCors()
  //Public
  app.useStaticAssets(path.join(__dirname, '..', 'public'))
  //Views
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'))
  //Handlebars
  app.setViewEngine('hbs')

  await app.listen(3000);
}


bootstrap();
