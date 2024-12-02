import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddProjectArgs {
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  status: string;
}
