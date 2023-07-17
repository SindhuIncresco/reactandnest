// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { JobController } from './job.controller';
// import { JobService } from './job.service';
// import { JobSchema } from './job.schema';

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: 'Job', schema: JobSchema }]),
//   ],
//   controllers: [JobController],
//   providers: [JobService],
// })
// export class JobModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { JobSchema } from './job.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Job', schema: JobSchema }])
  ],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
