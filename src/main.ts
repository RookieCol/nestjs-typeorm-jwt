import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('combined'));

  const configService = app.get(ConfigService);
  console.log(configService.get('POSTGRES_PORT'));
  
  await app.listen(3000);
}
bootstrap();
