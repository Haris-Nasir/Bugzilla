import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>, // Injecting the repository for User entity
  ) {}

  /**
   * Create a new user in the database
   * @param data User creation data
   * @returns Newly created user
   */
  async createUser(data: {
    firstName: string; // First name of the user
    lastName: string; // Last name of the user
    email: string; // Email of the user
    password: string; // Password of the user
    role: string; // Role of the user
  }): Promise<User> {
    // Check if a user with the same email already exists in the database
    const existingUser = await this.userRepo.findOne({
      where: { email: data.email },
    });

    // If a user with the same email exists, throw an error
    if (existingUser) {
      throw new HttpException('Email is already taken', HttpStatus.BAD_REQUEST);
    }

    // Create a new user entity using the provided data
    const newUser = this.userRepo.create(data);

    try {
      // Save the new user to the database and return the saved user
      return await this.userRepo.save(newUser);
    } catch (error) {
      // Log the error if the saving process fails
      console.error('Error saving new user:', error);

      // Throw an internal server error
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Find a user by email
   * @param email User's email address
   * @returns User entity or undefined if not found
   */
  async findUserByEmail(email: string): Promise<User | undefined> {
    try {
      // Query the database to find the user by email
      return await this.userRepo.findOne({ where: { email } });
    } catch (error) {
      // Log the error if querying the database fails
      console.error('Error while querying user by email:', error);

      // Throw an internal server error if the query fails
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
