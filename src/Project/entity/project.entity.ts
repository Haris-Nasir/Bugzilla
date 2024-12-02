import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//This entity will map into our database and graphql will read this deocrator to create schema and type definations
@Entity({ name: 'Project' }) //Entity decorator
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;

  @Column({ default: 'active' })
  status: string; //status of project can be active or completed.
}
//Now based on this entity, we will get repository of this entity through typeorm-module and we will inject that repository into our project service layer
