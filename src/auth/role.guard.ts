// src/auth/role.guard.ts
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export enum Roles {
  MANAGER = 'manager',
  DEVELOPER = 'developer',
  QA = 'qa',
}

export class RoleGuard implements CanActivate {
  constructor(private readonly role: Roles) {} // Use Roles enum

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { role } = ctx.user;

    return role === this.role;
  }
}
