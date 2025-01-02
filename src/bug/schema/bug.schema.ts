import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BugSchema {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  status: string;

  @Field((type) => Int)
  projectId: number; // Linking to the project ID
  @Field((type) => String)
  name: String;
}
