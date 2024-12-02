import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Project } from './schema/project.schema';
import { ProjectService } from './project.service';
import { AddProjectArgs } from './args/addpoject';
import { UpdateProjectArgs } from './args/updateproject';

@Resolver((of) => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}
  @Query((returns) => [Project], { name: 'projects' })
  getAllProjects() {
    return this.projectService.findAllProjects();
  }
  @Query((returns) => Project, { name: 'projectById' })
  getProjectById(@Args({ name: 'projectId', type: () => Int }) id: number) {
    return this.projectService.findProjectById(id);
  }
  @Mutation((returns) => String, { name: 'deleteProject' })
  deleteProjectById(@Args({ name: 'projectId', type: () => Int }) id: number) {
    return this.projectService.deleteProject(id);
  }
  @Mutation((returns) => String, { name: 'addProject' })
  addProject(@Args('addProjectArgs') addProjectArgs: AddProjectArgs) {
    return this.projectService.addProject(addProjectArgs);
  }
  @Mutation((returns) => String, { name: 'updateProject' })
  updateProject(
    @Args('updateProjectArgs') updateProjectArgs: UpdateProjectArgs,
  ) {
    return this.projectService.updateProject(updateProjectArgs);
  }
}
