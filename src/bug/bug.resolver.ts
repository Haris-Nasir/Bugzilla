import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BugService } from './bug.service';
import { Bug } from './entity/bug.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { JwtGuard } from '../auth/jwt.guard';
import { CreateBugDto } from './dto/create-bug.dto';
import { UpdateBugDto } from './dto/update-bug.dto';

@Resolver(() => Bug)
export class BugResolver {
  constructor(private readonly bugService: BugService) {}

  @UseGuards(AuthGuard, JwtGuard)
  @Query(() => [Bug])
  async getBugs() {
    return this.bugService.findAll();
  }

  @UseGuards(AuthGuard, JwtGuard)
  @Mutation(() => Bug)
  async createBug(@Args('createBugDto') createBugDto: CreateBugDto) {
    return this.bugService.create(createBugDto);
  }

  @UseGuards(AuthGuard, JwtGuard)
  @Mutation(() => Bug)
  async updateBug(
    @Args('id') id: string,
    @Args('updateBugDto') updateBugDto: UpdateBugDto,
  ) {
    return this.bugService.update(id, updateBugDto);
  }
}
