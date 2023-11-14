import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Example API')
  .setDescription('The example API description')
  .setVersion('1.0')
  .build();
