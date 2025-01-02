import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Bug } from '../../bug/entity/bug.entity';
import { ObjectType } from '@nestjs/graphql';
import { ProjectEntity } from 'src/project/entity/project.entity';

@Entity('users')
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

  @ManyToMany(() => ProjectEntity, (project) => project.users)
  projects: ProjectEntity[];

  @OneToMany(() => ProjectEntity, (project) => project.manager)
  managedProjects: ProjectEntity[];

  @OneToMany(() => Bug, (bug) => bug.creator)
  bugs: Bug[];

  @OneToMany(() => Bug, (bug) => bug.developer)
  assignedBugs: Bug[];
}
