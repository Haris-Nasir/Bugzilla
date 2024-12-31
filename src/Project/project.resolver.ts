import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entity/project.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { JwtGuard } from '../auth/jwt.guard';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/updateproject.dto';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(AuthGuard, JwtGuard)
  @Query(() => [Project])
  async getProjects() {
    return this.projectService.findAll();
  }

  @UseGuards(AuthGuard, JwtGuard)
  @Mutation(() => Project)
  async createProject(
    @Args('createProjectDto') createProjectDto: CreateProjectDto,
  ) {
    return this.projectService.create(createProjectDto);
  }

  @UseGuards(AuthGuard, JwtGuard)
  @Mutation(() => Project)
  async updateProject(
    @Args('id') id: string,
    @Args('updateProjectDto') updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectService.update(id, updateProjectDto);
  }
}
