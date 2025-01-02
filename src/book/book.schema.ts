import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType() //This decorator tells that its gone be schema of Book
export class Book {
  @Field((type) => Int)
  id: number;
  @Field()
  title: string;
  @Field((type) => Int)
  price: number;
}
//
