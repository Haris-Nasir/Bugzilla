import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Book')
export class BookResolver {
  @Query('books')
  getAllbooks() {
    return [
      { id: 1, title: 'Harry Potter', price: 500 },
      { id: 1, title: 'Hunger Games', price: 400 },
      { id: 1, title: 'Robin hood', price: 300 },
    ];
  }
}
