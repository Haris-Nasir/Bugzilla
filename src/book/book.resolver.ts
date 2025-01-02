import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { Book as BookModel } from '../graphql';
@Resolver(() => Book)
export class BookResolver {
  @Query(() => [Book], { name: 'books' })
  getAllBooks() {
    let arr: BookModel[] = [
      {
        id: 1,
        title: 'Harry Potter',
        price: 500,
      },
      {
        id: 2,
        title: 'Mark Boucher',
        price: 400,
      },
      {
        id: 3,
        title: 'Harry Pot',
        price: 300,
      },
    ];
    return arr;
  }
}
