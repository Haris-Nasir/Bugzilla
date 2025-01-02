import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bug } from './entity/bug.entity';
import { CreateBugDto } from './dto/create-bug.dto';
import { UpdateBugDto } from './dto/update-bug.dto';
import { createECDH } from 'node:crypto';
import { createContext } from 'node:vm';
import { Project } from 'src/graphql';

@Injectable()
export class BugService {
  constructor(
    @InjectRepository(Bug)
    private readonly bugRepository: Repository<Bug>,
  ) {}

  async findAll(): Promise<Bug[]> {
    return this.bugRepository.find({ relations: ['creator', 'project'] });
  }

  async create(createBugDto: CreateBugDto): Promise<Bug> {
    const bug = this.bugRepository.create(createBugDto);
    return this.bugRepository.save(bug);
  }
  async delete(): Promise<Bug[]> {
    const bugs = this.bugRepository.find();
    await this.bugRepository.clear();
    return bugs;
  }

  async update(id: string, updateBugDto: UpdateBugDto): Promise<Bug> {
    await this.bugRepository.update(id, updateBugDto);
    return this.bugRepository.findOne({
      where: { id },
      relations: ['creator', 'project'],
    });
  }
}
