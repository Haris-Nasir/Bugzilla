import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Bug {
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
}
