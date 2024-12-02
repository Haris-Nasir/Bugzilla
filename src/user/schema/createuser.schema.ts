import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  firstName: string;
  @Field(() => String)
  @IsNotEmpty()
  lastName: string;
  @Field(() => String)
  @IsEmail()
  email: string;
  @Field(() => String)
  @MinLength(6)
  password: string;
  @Field(() => String)
  @IsNotEmpty()
  role: string;
  @Field(() => Number, { nullable: true })
  id?: number;
}
@ObjectType()
export class UserOutput {
  @Field()
  id: number;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  email: string;
  @Field()
  role: string;
}
