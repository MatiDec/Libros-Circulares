import { PartialType } from '@nestjs/mapped-types';
import { CreateEditionDto } from './create-edition.dto';
import { Publisher } from '../../publisher/entities/publisher.entity';
import { Book } from '../../book/entities/book.entity';

export class UpdateEditionDto extends PartialType(CreateEditionDto) {
    year: number;
    book: Book;
    publisher: Publisher;
}
