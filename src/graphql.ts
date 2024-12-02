
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddProjectArgs {
    name: string;
    description: string;
    status: string;
}

export interface UpdateProjectArgs {
    id: number;
    name: string;
    description: string;
    status: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
}

export interface IQuery {
    index(): string | Promise<string>;
    projects(): Project[] | Promise<Project[]>;
    projectById(projectId: number): Project | Promise<Project>;
}

export interface IMutation {
    deleteProject(projectId: number): string | Promise<string>;
    addProject(addProjectArgs: AddProjectArgs): string | Promise<string>;
    updateProject(updateProjectArgs: UpdateProjectArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
