import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserOutput } from './schema/createuser.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  /**
   * Mutation to create a new user
   * @param firstName First name of the user
   * @param lastName Last name of the user
   * @param email Email of the user
   * @param password Password of the user
   * @param role Role of the user (e.g., admin, user)
   * @returns Newly created user output object
   */
  @Mutation(() => UserOutput)
  async createUser(
    @Args('firstName') firstName: string, // first name of the user
    @Args('lastName') lastName: string, // last name of the user
    @Args('email') email: string, // email of the user
    @Args('password') password: string, // password of the user
    @Args('role') role: string, // user role (e.g., 'admin', 'user')
  ): Promise<UserOutput> {
    // Directly passing the data from the mutation to the service to create the user
    const user = await this.userService.createUser({
      firstName,
      lastName,
      email,
      password,
      role,
    });
    return user; // Return the newly created user object
  }
}
