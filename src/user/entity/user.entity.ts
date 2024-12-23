import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@ObjectType() // Defines the class as graphql object for schema generation.
@Entity('app___users') //Defines the class as a typeorm entity to generate table in db.
export class User {
  @PrimaryGeneratedColumn() //Indicates a primary key coloumn for auto-generated value.
  id: number;

  @Field(() => String) //It exposes the first name property as a stringtype field in graphql-schema
  @Column() //It maps the propert to a database coloumn managed by typeorm.
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => String)
  @Column()
  role: string;
}
