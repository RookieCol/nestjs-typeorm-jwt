import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/modules/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.develop',
      isGlobal: true
    }),
    DatabaseModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
