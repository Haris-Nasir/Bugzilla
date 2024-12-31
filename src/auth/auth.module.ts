// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { UserModule } from '../user/user.module';
import { AuthGuard } from './auth.guard';
import { JwtGuard } from './jwt.guard';
import { RoleGuard } from './role.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', // Use a proper secret or environment variable
      signOptions: { expiresIn: '60m' }, // Optional, set expiration time
    }),
    UserModule, // Ensure UserModule is imported if needed
  ],
  providers: [AuthGuard, JwtGuard, RoleGuard],
  exports: [AuthGuard, JwtGuard, RoleGuard],
})
export class AuthModule {}
