import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/modules/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.develop',
      isGlobal: true
    }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
