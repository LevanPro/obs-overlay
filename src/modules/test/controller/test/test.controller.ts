import { Controller, Get, Render } from '@nestjs/common';

@Controller('test')
export class TestController {

    @Get('index')
    @Render('test')
    index() {return '';}

}
