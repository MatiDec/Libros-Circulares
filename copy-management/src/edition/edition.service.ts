import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEditionDto } from './dto/create-edition.dto';
import { UpdateEditionDto } from './dto/update-edition.dto';
import { Edition } from './entities/edition.entity';
import { PublisherService } from '../publisher/publisher.service';
import { BookService } from '../book/book.service';

@Injectable()
export class EditionService {
  static editions: Edition[] = [];

  constructor(private readonly bookService: BookService, private readonly publisherService: PublisherService) {}

  create(createEditionDto: CreateEditionDto) {
    const book = this.bookService.findOne(createEditionDto.book.Id);
    const publisher = this.publisherService.findOne(createEditionDto.publisher.Id);
    const newEdition = new Edition;
    newEdition.year = createEditionDto.year;
    newEdition.book = book;
    newEdition.publisher = publisher;
    newEdition.Id = Math.random();
    EditionService.editions.push(newEdition);
    return newEdition.Id;
  }

  findAll() {
    return EditionService.editions;
  }

  findOne(id: number) {
    const edition = EditionService.editions.find((e) => e.Id === id);
    if (!edition) {
      throw new NotFoundException();
    } else {
      return edition;
    }
  }

  update(id: number, updateEditionDto: UpdateEditionDto) {
    const edition = this.findOne(id);
    if (!edition) {
      throw new NotFoundException();
    } else {
      edition.year = updateEditionDto.year;
      edition.book = this.bookService.findOne(updateEditionDto.book.Id);
      edition.publisher = this.publisherService.findOne(updateEditionDto.publisher.Id);
      return edition;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} edition`;
  }
}
