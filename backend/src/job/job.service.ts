// import { Injectable, NotFoundException  } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Job } from './job.schema';
// import { addDays } from 'date-fns';
// @Injectable()
// export class JobService {
// constructor(
//     @InjectModel(Job.name) private jobModel: Model<Job>
// ) {}
// async find(): Promise<Job[]> {
//     const jobs = await this.jobModel.find()
//     return jobs
// }
//   async findById(id: string): Promise<Job> {
//     const job = await this.jobModel.findById(id);
//     if (!job) {
//       throw new NotFoundException('Job not found.');
//     }
//     return job;
//   }
  



//   //date 
//   async findJob(filteredValues: object): Promise<Job[]> {
//     console.log('in service', filteredValues);
  
//     const jobSearch = {};
//     Object.keys(filteredValues).forEach((key: string) => {
//       console.log('Processing key:', filteredValues[key]);
//       if (filteredValues[key].length > 0) {
//         if (key === 'date') {
//           const today = new Date();
//           let checkFrom = new Date();
  
//           const date = filteredValues['date'];
  
//           if (date.includes('Last 7 days')) {
//             const startDate = new Date();
//             startDate.setDate(startDate.getDate() - 6); // Adjusting start date to cover the last 7 days
//             jobSearch[key] = { $gte: startDate.toISOString() };
//           } else if (date.includes('Last 48 hours')) {
//             const startDate = new Date();
//             startDate.setHours(startDate.getHours() - 48); // Adjusting start date to cover the last 48 hours
//             jobSearch[key] = { $gte: startDate.toISOString() };
//           } 
//           else if (date.includes('Last 24 hours')) {
//             const startDate = new Date();
//             startDate.setHours(startDate.getHours() - 24); // Adjusting start date to cover the last 48 hours
//             jobSearch[key] = { $gte: startDate.toISOString() };
//           } else if (date.includes('Last 14 days')) {
//             const startDate = new Date();
//             startDate.setHours(startDate.getDate()- 14); // Adjusting start date to cover the last 48 hours
//             jobSearch[key] = { $gte: startDate.toISOString() };
//           } else {
//             jobSearch[key] = { $in: filteredValues[key] };
//           }
//         } else {
//           jobSearch[key] = { $in: filteredValues[key] };
//         }
//       }
//     });
  
//     console.log('Job search:', jobSearch);
  
//     const jobs = await this.jobModel.find(jobSearch);
  
//     console.log('Matched jobs:', jobs);
  
//     return jobs;
//   }
  
     
  
  

//   async sortJobs(sortData : object): Promise<Job[] | Job> {

//     const job = sortData['alljob']

//     const sortBy = sortData['sort']

//     console.log('job000000',sortBy)

//     const sortConfigure = {
//       "az": { "field": "title", "order": -1 },  
//       "za": { "field": "title", "order": 1 }  
//     };
  

//     const sortField = sortConfigure[sortBy].field;
//     const sortOrder = sortConfigure[sortBy].order;

//     const jobs = await this.jobModel.find({ _id: { $in: job } }).sort({ [sortField]: sortOrder });

//     // console.log("1111", jobs)
//     return jobs;
// }
// }


import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from './job.schema';
import { addDays } from 'date-fns';

@Injectable()
export class JobService {
  constructor(
    @InjectModel(Job.name) private jobModel: Model<Job>,
  ) {}

  async find(): Promise<Job[]> {
    const jobs = await this.jobModel.find();
    return jobs;
  }

  async findById(id: string): Promise<Job> {
    const job = await this.jobModel.findById(id);
    if (!job) {
      throw new NotFoundException('Job not found.');
    }
    return job;
  }

  async findJob(filteredValues: object): Promise<Job[]> {
    console.log('in service', filteredValues);

    const jobSearch: any = {};
    Object.keys(filteredValues).forEach((key: string) => {
      console.log('Processing key:', filteredValues[key]);
      if (filteredValues[key].length > 0) {
        if (key === 'date') {
          const today = new Date();
          let checkFrom = new Date();

          const date = filteredValues['date'];

          if (date.includes('Last 7 days')) {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - 6); // Adjusting start date to cover the last 7 days
            jobSearch[key] = { $gte: startDate.toISOString() };
          } else if (date.includes('Last 48 hours')) {
            const startDate = new Date();
            startDate.setHours(startDate.getHours() - 48); // Adjusting start date to cover the last 48 hours
            jobSearch[key] = { $gte: startDate.toISOString() };
          } else if (date.includes('Last 24 hours')) {
            const startDate = new Date();
            startDate.setHours(startDate.getHours() - 24); // Adjusting start date to cover the last 48 hours
            jobSearch[key] = { $gte: startDate.toISOString() };
          } else if (date.includes('Last 14 days')) {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - 14); // Adjusting start date to cover the last 14 days
            jobSearch[key] = { $gte: startDate.toISOString() };
          } else {
            jobSearch[key] = { $in: filteredValues[key] };
          }
        } else {
          jobSearch[key] = { $in: filteredValues[key] };
        }
      }
    });

    console.log('Job search:', jobSearch);

    const jobs = await this.jobModel.find(jobSearch);

    console.log('Matched jobs:', jobs);

    return jobs;
  }

  async sortJobs(sortData: object): Promise<Job[] | Job> {
    const job = sortData['alljob'];
    const sortBy = sortData['sort'];
    console.log('job000000', sortBy);

    const sortConfigure = {
      az: { field: 'title', order: -1 },
      za: { field: 'title', order: 1 },
    };

    const sortField = sortConfigure[sortBy].field;
    const sortOrder = sortConfigure[sortBy].order;

    const jobs = await this.jobModel.find({ _id: { $in: job } }).sort({ [sortField]: sortOrder });

    // console.log("1111", jobs)
    return jobs;
  }
}
