import { CreateEditionDto } from './dto/create-edition.dto';
import { UpdateEditionDto } from './dto/update-edition.dto';
import { Edition } from './entities/edition.entity';
import { PublisherService } from '../publisher/publisher.service';
import { BookService } from '../book/book.service';
export declare class EditionService {
    private readonly bookService;
    private readonly publisherService;
    static editions: Edition[];
    constructor(bookService: BookService, publisherService: PublisherService);
    create(createEditionDto: CreateEditionDto): number;
    findAll(): Edition[];
    findOne(id: number): Edition;
    update(id: number, updateEditionDto: UpdateEditionDto): Edition;
    remove(id: number): string;
}
