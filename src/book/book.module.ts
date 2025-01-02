import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BookResolver } from './book.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [BookResolver],
})
export class BookModule {}
