import { CreateEditionDto } from './create-edition.dto';
import { Publisher } from '../../publisher/entities/publisher.entity';
import { Book } from '../../book/entities/book.entity';
declare const UpdateEditionDto_base: import("@nestjs/mapped-types", { with: { "resolution-mode": "import" } }).MappedType<Partial<CreateEditionDto>>;
export declare class UpdateEditionDto extends UpdateEditionDto_base {
    year: number;
    book: Book;
    publisher: Publisher;
}
export {};
