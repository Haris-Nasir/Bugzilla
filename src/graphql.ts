
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

export interface AddBugArgs {
    title: string;
    description: string;
    status: string;
    projectId: number;
}

export interface UpdateBugArgs {
    id: number;
    title: string;
    description: string;
    status: string;
    projectId: number;
}

export interface Project {
    id: number;
    name: string;
    description: string;
}

export interface Bug {
    id: number;
    title: string;
    description: string;
    status: string;
    projectId: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    projects(): Project[] | Promise<Project[]>;
    projectById(projectId: number): Project | Promise<Project>;
    bugs(): Bug[] | Promise<Bug[]>;
    bugById(bugId: number): Bug | Promise<Bug>;
}

export interface IMutation {
    deleteProject(projectId: number): string | Promise<string>;
    addProject(addProjectArgs: AddProjectArgs): string | Promise<string>;
    updateProject(updateProjectArgs: UpdateProjectArgs): string | Promise<string>;
    deleteBug(bugId: number): string | Promise<string>;
    addBug(addBugArgs: AddBugArgs): string | Promise<string>;
    updateBug(updateBugArgs: UpdateBugArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
