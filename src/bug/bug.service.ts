import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BugEntity } from './entity/bug.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddBugArgs } from './args/addbug';
import { UpdateBugArgs } from './args/updatebug';

@Injectable() // As we create this injectable decorator, we will provide this into our project provider
export class BugService {
  constructor(
    @InjectRepository(BugEntity)
    public readonly bugRepo: Repository<BugEntity>,
  ) {}

  async findAllBugs(): Promise<BugEntity[]> {
    let bugs = await this.bugRepo.find();
    return bugs;
  }

  async findBugById(id: number): Promise<BugEntity> {
    let bug = await this.bugRepo.findOne({ where: { id: id } });
    return bug;
  }

  async deleteBug(id: number): Promise<string> {
    await this.bugRepo.delete(id);
    return 'Bug has been deleted';
  }

  async addBug(addBugArgs: AddBugArgs): Promise<string> {
    let bug: BugEntity = new BugEntity();
    bug.title = addBugArgs.title;
    bug.description = addBugArgs.description;
    bug.status = addBugArgs.status;
    bug.projectId = addBugArgs.projectId; // Linking the bug to the project

    await this.bugRepo.save(bug);
    return 'Bug has been successfully added';
  }

  async updateBug(updateBugArgs: UpdateBugArgs): Promise<string> {
    let bug: BugEntity = await this.bugRepo.findOne({
      where: { id: updateBugArgs.id },
    });

    bug.title = updateBugArgs.title;
    bug.description = updateBugArgs.description;
    bug.status = updateBugArgs.status;
    bug.projectId = updateBugArgs.projectId; // Linking the bug to the project

    await this.bugRepo.save(bug);
    return 'Bug has been successfully updated';
  }
}
