import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { EmailService } from 'src/services/email/email.service';
import { IEmail } from 'src/models/email';
import { Response } from 'express';
import { MAILGUN_USERNAME } from 'src/utils/config';

@Controller('email')
export class EmailController {

    constructor(private emailService: EmailService) { }

    @Post()
    async sendEmail(@Body() email: IEmail, @Res() res: Response) {
        try {
            await this.emailService.send(email);
            console.log('POST /message/email => Email successfully sent!');
            res.status(HttpStatus.CREATED).send();
        } catch(err) {
            console.log(err.message);
            res.status(HttpStatus.NOT_ACCEPTABLE).send();
        }
    }

}
