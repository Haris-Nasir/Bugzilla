import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddBugArgs {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  status: string;

  @Field()
  projectId: number; // Link to the project
}
