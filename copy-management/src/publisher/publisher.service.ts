import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './entities/publisher.entity';

@Injectable()
export class PublisherService {
  static publishers: Publisher[] = [];
  create(createPublisherDto: CreatePublisherDto) {
    const newPublisher = new Publisher;
    newPublisher.name = createPublisherDto.name;
    newPublisher.Id = Math.random();
    PublisherService.publishers.push(newPublisher);
    return newPublisher.Id;
  }

  findAll() {
    return PublisherService.publishers;
  }

  findOne(id: number) {
    const publisher = PublisherService.publishers.find((p) => p.Id === id);
    if (!publisher) {
      throw new NotFoundException();
    } else {
      return publisher;
    }
  }

  update(id: number, updatePublisherDto: UpdatePublisherDto) {
    const publisher = this.findOne(id);
    if (!publisher) {
      throw new NotFoundException();
    } else {
      publisher.name = updatePublisherDto.name;
      return publisher;
    }
  }

  remove(id: number) {
    const publisher = this.findOne(id);
    if (!publisher) {
      throw new NotFoundException();
    } else {
      PublisherService.publishers = PublisherService.publishers.filter((p) => p.Id !== id);
      return true;
    }
  }
}
