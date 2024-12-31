import { InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsIn, IsString } from 'class-validator';
@InputType()
export class CreateBugDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  deadline?: Date;

  @IsOptional()
  screenshot?: string;

  @IsNotEmpty()
  @IsIn(['feature', 'bug'])
  type: string;

  @IsNotEmpty()
  @IsIn(['new', 'started', 'completed', 'resolved'])
  status: string;

  @IsNotEmpty()
  creatorId: string;

  @IsOptional()
  developerId?: string;

  @IsNotEmpty()
  projectId: string;
}
