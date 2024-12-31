import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entity/user.entity';
import { Bug } from '../../bug/entity/bug.entity';
import { ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, (user) => user.managedProjects)
  manager: User;

  @ManyToMany(() => User, (user) => user.projects)
  @JoinTable()
  users: User[];

  @OneToMany(() => Bug, (bug) => bug.project)
  bugs: Bug[];
}
