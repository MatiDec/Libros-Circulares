import { Module } from '@nestjs/common';
import { EditionService } from './edition.service';
import { EditionController } from './edition.controller';
import { PublisherModule } from '../publisher/publisher.module';
import { BookModule } from '../book/book.module';

@Module({
  controllers: [EditionController],
  providers: [EditionService],
  exports: [EditionService],
  imports: [BookModule, PublisherModule],
})
export class EditionModule {}
