import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  authors: Author[] = [];

  create(createAuthorDto: CreateAuthorDto) {
    const newAuthor = new Author();
        newAuthor.name = createAuthorDto.name;
        newAuthor.lastName = createAuthorDto.lastName;
        newAuthor.nationality = createAuthorDto.nationality;
        newAuthor.residency = createAuthorDto.residency;
        newAuthor.Id = Math.random();
        this.authors.push(newAuthor);
    
        return newAuthor.Id;
  }

  findAll() {
    return this.authors;
  }

  findOne(id: number) {
    const author = this.authors.find((a) => a.Id == id);
    if (!author) {
      throw new NotFoundException();
    } else {
      return author;
    }
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const author = this.authors.find((a) => a.Id == id);
    if (!author) {
      throw new NotFoundException();
    } else {
      author.name = updateAuthorDto.name;
      author.lastName = updateAuthorDto.lastName;
      author.nationality = updateAuthorDto.nationality;
      author.residency = updateAuthorDto.residency;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
