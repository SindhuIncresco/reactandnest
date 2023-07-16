// import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { AppModule } from './app.module';
// import * as Sentry from '@sentry/node';
// import { error } from 'console';
// require('dotenv').config();

// async function bootstrap() {


//   Sentry.init({
//     dsn: process.env.SENTRY_DNS
//   });

//   try{
 
//     // throw new Error("Sentry error check123")
//     const app = await NestFactory.create(AppModule);
//     const options = new DocumentBuilder()
//       .setTitle('Job Application API')
//       .setDescription('API for managing job applications')
//       .setVersion('1.0')
//       .build();
//     const document = SwaggerModule.createDocument(app, options);
//     SwaggerModule.setup('api', app, document);
//     await app.listen(3000);
//   }catch(error){
//   Sentry.captureException(error)
//   }
// }
// bootstrap();












import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';
 async function bootstrap() {
  Sentry.init({
    dsn: process.env.SENTRY_DSN
  });

  try {
    const app = await NestFactory.create(AppModule);
    const options = new DocumentBuilder()
      .setTitle('Job Application API')
      .setDescription('API for managing job applications')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
  } catch (err) {
    Sentry.captureException(err);
  }
}

 
export default bootstrap();

