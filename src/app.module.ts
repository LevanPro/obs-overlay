import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { TestController } from './modules/test/controller/test/test.controller';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
