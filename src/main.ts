import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swagger/swaggerConfig';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    //Class-validator middleware for validating incoming request payloads 
    app.useGlobalPipes(new ValidationPipe(
      {
        whitelist: true,
        forbidNonWhitelisted: true,
      }
    ));


    // Morgan middleware for logging HTTP requests
    app.use(morgan('combined'));

    // Retrieve configuration service
    const configService = app.get(ConfigService);
    const port = configService.get('PORT') || 3000;

    // Global API prefix
    app.setGlobalPrefix('api/v1');

    // Swagger configuration
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, document);

    // Start the application
    await app.listen(port);
    console.log(`Application is running on: ${await app.getUrl()}`);
  } catch (error) {
    console.error('Error during NestJS application startup', error);
  }
}

bootstrap();
