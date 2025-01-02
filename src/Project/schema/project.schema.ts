import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('ProjectSchema')
export class ProjectSchema {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  description: string;
}
