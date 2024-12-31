import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { InputType } from '@nestjs/graphql';
@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {}
