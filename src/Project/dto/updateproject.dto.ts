import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { InputType } from '@nestjs/graphql';
@InputType()
export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
