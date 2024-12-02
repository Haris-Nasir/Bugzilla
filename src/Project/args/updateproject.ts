import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProjectArgs {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  status: string;
}
