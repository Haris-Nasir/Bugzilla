import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Project } from '../../project/entity/project.entity';
import { Bug } from '../../bug/entity/bug.entity';
import { ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  userType: string; // 'manager', 'developer', 'qa'

  @ManyToMany(() => Project, (project) => project.users)
  projects: Project[];

  @OneToMany(() => Project, (project) => project.manager)
  managedProjects: Project[];

  @OneToMany(() => Bug, (bug) => bug.creator)
  bugs: Bug[];

  @OneToMany(() => Bug, (bug) => bug.developer)
  assignedBugs: Bug[];
}
