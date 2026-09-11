import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCopyDto } from './dto/create-copy.dto';
import { UpdateCopyDto } from './dto/update-copy.dto';
import { EditionService } from '../edition/edition.service';
import { Copy } from './entities/copy.entity';

@Injectable()
export class CopyService {
  static copies: Copy[] = [];

  constructor(private readonly editionService: EditionService) {}

  create(createCopyDto: CreateCopyDto) {
    const edition = this.editionService.findOne(createCopyDto.edition.Id);
    const newCopy = new Copy;
    newCopy.edition = edition;
    newCopy.Id = Math.random();
    newCopy.ownerId = Math.random();//PLACEHOLDER, este se relaciona con otro service
    CopyService.copies.push(newCopy);
    return newCopy.Id;
  }

  findAll() {
    return CopyService.copies;
  }

  findOne(id: number) {
    const copy = CopyService.copies.find((c) => c.Id === id);
    if (!copy) {
      throw new NotFoundException();
    } else {
      return copy;
    }
  }

  update(id: number, updateCopyDto: UpdateCopyDto) {
    const copy = this.findOne(id);
    if (!copy) {
      throw new NotFoundException();
    } else {
      copy.edition = this.editionService.findOne(updateCopyDto.edition.Id);
      return copy;
    }
  }

  remove(id: number) {
    const copy = this.findOne(id);
    if (!copy) {
      throw new NotFoundException();
    } else {
      CopyService.copies = CopyService.copies.filter((c) => c.Id !== id);
      return true;
    }
  }
}
