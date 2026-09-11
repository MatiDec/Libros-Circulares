import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  genres: Genre[] = [];

  create(createGenreDto: CreateGenreDto) {
    const newGenre = new Genre();
    newGenre.name = createGenreDto.name;
    newGenre.Id = Math.random();
    this.genres.push(newGenre);

    return newGenre.Id;
  }

  findAll() {
    return this.genres;
  }

  findOne(id: number) {
    const genre = this.genres.find((g) => g.Id == id);
    if (!genre) {
      throw new NotFoundException();
    } else {
      return genre;
    }
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    const genre = this.genres.find((g) => g.Id == id);
    if (!genre) {
      throw new NotFoundException();
    } else {
      genre.name = updateGenreDto.name;
    }
  }

  remove(id: number) {
    this.genres = this.genres.filter((g) => g.Id != id);
    return true;
  }
}
