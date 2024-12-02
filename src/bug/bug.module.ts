import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BugEntity } from './entity/bug.entity';
import { BugService } from './bug.service';
import { BugResolver } from './bug.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BugEntity])],
  controllers: [],
  providers: [BugService, BugResolver],
  exports: [BugService],
})
export class BugModule {}
