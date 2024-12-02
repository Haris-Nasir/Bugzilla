import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateBugArgs {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  status: string;

  @Field()
  projectId: number; // Link to the project
}
