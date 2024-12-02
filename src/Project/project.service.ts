import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProjectEntity } from './entity/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddProjectArgs } from './args/addpoject';
import { UpdateProjectArgs } from './args/updateproject';

@Injectable() //As we create this injectable decorator, we will provide this into our project provider
export class ProjectService {
  // now we will inject project entity repository into our service layer
  constructor(
    @InjectRepository(ProjectEntity)
    public readonly projectRepo: Repository<ProjectEntity>,
  ) {}
  async findAllProjects(): Promise<ProjectEntity[]> {
    let projects = await this.projectRepo.find();
    return projects;
  }
  async findProjectById(id: number): Promise<ProjectEntity> {
    let project = await this.projectRepo.findOne({ where: { id: id } });
    return project;
  }
  async deleteProject(id: number): Promise<string> {
    await this.projectRepo.delete(id);
    return 'Project has been deleted';
  }
  async addProject(addProjectargs: AddProjectArgs): Promise<string> {
    let project: ProjectEntity = new ProjectEntity();
    project.name = addProjectargs.name;
    project.description = addProjectargs.description;
    project.status = addProjectargs.status;
    await this.projectRepo.save(project);
    return 'Project has been successfully added';
  }
  async updateProject(updateProjectargs: UpdateProjectArgs): Promise<string> {
    let project: ProjectEntity = await this.projectRepo.findOne({
      where: { id: updateProjectargs.id },
    });
    project.name = updateProjectargs.name;
    project.description = updateProjectargs.description;
    project.status = updateProjectargs.status;
    await this.projectRepo.save(project);
    return 'Project has been successfully updated';
  }
}
