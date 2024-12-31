import { PartialType } from '@nestjs/mapped-types';
import { CreateBugDto } from './create-bug.dto';
import { InputType } from '@nestjs/graphql';
@InputType()
export class UpdateBugDto extends PartialType(CreateBugDto) {}
