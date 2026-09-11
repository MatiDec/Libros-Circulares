import { Publisher } from "../../publisher/entities/publisher.entity";
import { Book } from "../../book/entities/book.entity";
export declare class CreateEditionDto {
    year: number;
    book: Book;
    publisher: Publisher;
}
