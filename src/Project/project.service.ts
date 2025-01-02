import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/updateproject.dto';
import { ProjectEntity } from './entity/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  async findAll(): Promise<ProjectEntity[]> {
    return this.projectRepository.find({ relations: ['manager', 'users'] });
  }

  async create(createProjectDto: CreateProjectDto): Promise<ProjectEntity> {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectEntity> {
    await this.projectRepository.update(id, updateProjectDto);
    return this.projectRepository.findOne({
      where: { id },
      relations: ['manager', 'users'],
    });
  }
}
