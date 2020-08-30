import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailService } from './services/email/email.service';
import { EmailController } from './controllers/email/email.controller';

@Module({
  imports: [],
  controllers: [AppController, EmailController],
  providers: [AppService, EmailService],
})
export class AppModule {}
