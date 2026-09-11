import { Module } from '@nestjs/common';
import { CopyService } from './copy.service';
import { CopyController } from './copy.controller';
import { EditionModule } from '../edition/edition.module';

@Module({
  imports: [EditionModule],
  controllers: [CopyController],
  providers: [CopyService],
})
export class CopyModule {}
