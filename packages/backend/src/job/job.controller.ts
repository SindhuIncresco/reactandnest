import { Controller, Get,  Param ,Post,UseInterceptors,Body,Query} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiOkResponse } from '@nestjs/swagger';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { Job } from './job.schema';
import  { JobService } from './job.service';
import { SentryInterceptor } from './../sentry-interceptor';


@UseInterceptors(SentryInterceptor)
@Controller('job')
@ApiTags('job')
export class JobController {
  constructor(private jobService: JobService) {}
  
  @Get()
  async find(): Promise<Job[]> {
    return this.jobService.find();
  }
  @Get(':id')
  async findById(
    @Param('id')
    id: string,
  ): Promise<Job> {
    return this.jobService.findById(id);
  }
  @Post ()
  async findJob(@Body() filteredValues: object): Promise<Job[]> {
    console.log('in controller', filteredValues);
  
    return this.jobService.findJob(filteredValues);
  }
  // @Post ()
  // async sortJobs(@Body() sortData : object): Promise<Job[]> {
  //   console.log('in controller', sortData);
  //   return this.jobService.findJob(sortData );
  // }
  @Post('/sort')
    async sortJobs(@Body() sortData: object, @Query() query: any): Promise<Job[] | Job> {
      
        return this.jobService.sortJobs(sortData);
    }
}
