

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Job {
  @Prop()
  title: string;

  @Prop()
  company: string;

  @Prop()
  location: string;
  
  @Prop()
  date: string;

  @Prop()
  salary: string;

  @Prop()
  skill: string;

  @Prop()
  experience: string;

  @Prop()
  education: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);