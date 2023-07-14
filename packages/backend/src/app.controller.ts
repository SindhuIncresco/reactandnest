// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
// import { I18n, I18nContext } from 'nestjs-i18n';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}
//   @Get()
//   // async getHello(@I18n() i18n: I18nContext) {
//   //   console.log("hhhhhh")
//   //   return this.appService.getHello();
//   // }

//   async getHello(@I18n() i18n: I18nContext, @Req() request: Request) {
//     return this.appService.getHello(request);
//   }
// }


import { Controller, Get, InternalServerErrorException, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  async getHello(@I18n() i18n: I18nContext, @Req() request1: Request) {
    return this.appService.getHello(request1);
  }

 
}
