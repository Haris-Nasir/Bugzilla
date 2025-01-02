import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Unique,
} from 'typeorm';
import { User } from '../../user/entity/user.entity';
import { ObjectType } from '@nestjs/graphql';
import { ProjectEntity } from 'src/project/entity/project.entity';

@Entity('bugs')
@ObjectType()
@Unique(['title', 'project'])
export class Bug {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  deadline: Date;

  @Column({ nullable: true })
  screenshot: string;

  @Column()
  type: string; // 'feature' or 'bug'

  @Column()
  status: string; // 'new', 'started', 'completed' (for features), 'resolved' (for bugs)

  @ManyToOne(() => User, (user) => user.bugs)
  creator: User;

  @ManyToOne(() => User, (user) => user.assignedBugs, { nullable: true })
  developer: User;

  @ManyToOne(() => ProjectEntity, (project) => project.bugs)
  project: ProjectEntity;
}
