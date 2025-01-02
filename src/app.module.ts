import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      typePaths: './**/*.graphql',
    }),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
