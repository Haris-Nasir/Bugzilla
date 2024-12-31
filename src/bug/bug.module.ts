import { Module } from '@nestjs/common';
import { BugResolver } from './bug.resolver';
import { BugService } from './bug.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bug } from './entity/bug.entity';
import { ProjectModule } from '../project/project.module';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bug]),
    ProjectModule,
    UserModule,
    JwtModule,
  ],
  providers: [BugResolver, BugService],
  exports: [BugService],
})
export class BugModule {}
