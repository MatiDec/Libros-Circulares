import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
export declare class PublisherController {
    private readonly publisherService;
    constructor(publisherService: PublisherService);
    create(createPublisherDto: CreatePublisherDto): number;
    findAll(): import("./entities/publisher.entity").Publisher[];
    findOne(id: string): import("./entities/publisher.entity").Publisher;
    update(id: string, updatePublisherDto: UpdatePublisherDto): import("./entities/publisher.entity").Publisher;
    remove(id: string): boolean;
}
