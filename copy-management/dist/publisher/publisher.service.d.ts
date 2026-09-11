import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './entities/publisher.entity';
export declare class PublisherService {
    static publishers: Publisher[];
    create(createPublisherDto: CreatePublisherDto): number;
    findAll(): Publisher[];
    findOne(id: number): Publisher;
    update(id: number, updatePublisherDto: UpdatePublisherDto): Publisher;
    remove(id: number): boolean;
}
