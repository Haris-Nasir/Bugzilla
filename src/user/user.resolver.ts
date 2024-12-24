import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserOutput } from './schema/createuser.schema';
import { HttpException, HttpStatus } from '@nestjs/common';

@Resolver(() => User) //Define class as graphql resolver for type User to handle graphql operations on User fields.
export class UserResolver {
  constructor(private readonly userService: UserService) {} //Injects the userservice into the resolver for business logic execution.

  /**
   * Mutation to create a new user
   * @param firstName
   * @param lastName
   * @param email
   * @param password
   * @param role Role should be either (Developer,manager or qa)
   * @returns
   */
  @Mutation(() => UserOutput) //Defines a graphql mutation that returns a useroutput type.
  async createUser(
    @Args('firstName') firstName: string, //Binds the mutation arguments to the method parameter.
    @Args('lastName') lastName: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('role') role: string,
  ): Promise<UserOutput> {
    //Calls the create user servicemethod to create a new user with the provided data.
    try {
      return await this.userService.createUser({
        firstName,
        lastName,
        email,
        password,
        role,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
//Deals with the graphql-specific (handling queries, mutations and subscription)
