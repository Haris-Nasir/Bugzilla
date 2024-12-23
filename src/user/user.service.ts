import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Injectable() //Marks the class UserService as injectable.
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>, // Injects the typeorm repository for the user entity to interact with the databse
  ) {}

  /**
   * Create a new user in the database
   * @param data User creation data
   * @returns Newly created user
   */
  async createUser(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
  }): Promise<User> {
    // Check either the user exists on the basis of email
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
      console.error('Error while querying user by email:', error);

      // Throw an internal server error if the query fails
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
//Service directly interact with the database and contains the core business logic
