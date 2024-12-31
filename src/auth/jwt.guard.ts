// src/auth/jwt.guard.ts
import { Injectable } from '@nestjs/common';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; // Import JwtService
import { Reflector } from '@nestjs/core';

export const tokenBlacklist: string[] = []; // In-memory blacklist

@Injectable()
export class JwtGuard {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService, // Inject JwtService
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1]; // Assuming token is passed in Bearer header

    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    // Check if the token is blacklisted
    if (tokenBlacklist.includes(token)) {
      throw new UnauthorizedException('Token is blacklisted');
    }

    try {
      const decoded = this.jwtService.verify(token); // Use JwtService to verify token
      request.user = decoded; // Attach user info to request
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
