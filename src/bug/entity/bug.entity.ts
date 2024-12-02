import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// This entity will map into our database and GraphQL will read this decorator to create schema and type definitions.
@Entity({ name: 'Bug' }) // Entity decorator
export class BugEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string; // status of the bug (e.g., 'open', 'closed')

  @Column()
  projectId: number; // Link to the Project entity
}
