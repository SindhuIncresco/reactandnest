import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobModule } from './job/job.module';
import { JobSchema } from './job/job.schema';
import { JobController } from './job/job.controller';
import { JobService } from './job/job.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sindhu:123@cluster0.iffw5ck.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: 'Job', schema: JobSchema }]),
    JobModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(
          __dirname,
           '/i18n/'
           ),
        watch: true,
      },
      
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    })
   
  ],
  controllers: [AppController,JobController],
  providers: [AppService,JobService],
})
export class AppModule {}













