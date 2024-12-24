import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength, IsIn, Matches } from 'class-validator';

@InputType() //Marks the class as a graphql input type for receiving data in creating user through mutation.
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  firstName: string;
  @Field(() => String)
  @IsNotEmpty()
  lastName: string;
  @Field(() => String)
  @IsEmail() //Validates that the property is a valid email address.
  email: string;
  @Field(() => String)
  @MinLength(6) // Decorator to verify that minimum length of password should be 6.
  @Matches(/(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+{}":;,.<>?]).{6,}/, {
    message:
      'Password must include at least one letter, one number, and one special character',
  })
  password: string;
  @Field(() => String)
  @IsNotEmpty() // Decorator to validate that role should not be empty
  @IsIn(['manager', 'developer', 'qa'], {
    message: 'Role must be one of developer,manager,qa',
  }) //Imported from class validator
  role: string;
  @Field(() => Number, { nullable: true })
  id?: number;
}
@ObjectType() //Marks the class as a graphql output type for exposing data in queries.
export class UserOutput {
  @Field() //Exposes the property as a string type field in graphql schema.
  id: number;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  email: string;
  // @Field()
  // password: string;
  @Field()
  role: string;
}
