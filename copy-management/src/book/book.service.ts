import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { AuthorService } from '../author/author.service';
import { GenreService } from '../genre/genre.service';

@Injectable()
export class BookService {
  books: Book[] = [];

  constructor(private readonly genreService: GenreService, private readonly authorService: AuthorService) {}

  create(createBookDto: CreateBookDto) {
    const genre = this.genreService.findOne(createBookDto.genreId);
    const authors = createBookDto.authorIds.map(a => this.authorService.findOne(a));
    const newBook = new Book;
    newBook.authors = authors;
    newBook.genre = genre;
    newBook.name = createBookDto.name;
    newBook.Id = Math.random();
    this.books.push(newBook);

    return newBook.Id;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const book = this.books.find((b) => b.Id === id);
    if (!book) {
      throw new NotFoundException();
    } else {
      return book;
    }
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const book = this.books.find((b) => b.Id === id);
    if (!book) {
      throw new NotFoundException();
    } else {
      book.name = updateBookDto.name;
      book.genre = this.genreService.findOne(updateBookDto.genreId);
      book.authors = updateBookDto.authorIds.map(a => this.authorService.findOne(a));
    }
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
