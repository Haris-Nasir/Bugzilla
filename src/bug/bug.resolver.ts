import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Bug } from './schema/bug.schema';
import { BugService } from './bug.service';
import { AddBugArgs } from './args/addbug';
import { UpdateBugArgs } from './args/updatebug';

@Resolver((of) => Bug)
export class BugResolver {
  constructor(private readonly bugService: BugService) {}

  @Query((returns) => [Bug], { name: 'bugs' })
  getAllBugs() {
    return this.bugService.findAllBugs();
  }

  @Query((returns) => Bug, { name: 'bugById' })
  getBugById(@Args({ name: 'bugId', type: () => Int }) id: number) {
    return this.bugService.findBugById(id);
  }

  @Mutation((returns) => String, { name: 'deleteBug' })
  deleteBugById(@Args({ name: 'bugId', type: () => Int }) id: number) {
    return this.bugService.deleteBug(id);
  }

  @Mutation((returns) => String, { name: 'addBug' })
  addBug(@Args('addBugArgs') addBugArgs: AddBugArgs) {
    return this.bugService.addBug(addBugArgs);
  }

  @Mutation((returns) => String, { name: 'updateBug' })
  updateBug(@Args('updateBugArgs') updateBugArgs: UpdateBugArgs) {
    return this.bugService.updateBug(updateBugArgs);
  }
}
