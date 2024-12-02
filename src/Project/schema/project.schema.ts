import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  description: string;
}
