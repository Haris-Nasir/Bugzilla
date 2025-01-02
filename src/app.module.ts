import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),

    BookModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
