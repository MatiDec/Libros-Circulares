import { PartialType } from '@nestjs/mapped-types';
import { CreateCopyDto } from './create-copy.dto';
import { Edition } from '../../edition/entities/edition.entity';

export class UpdateCopyDto extends PartialType(CreateCopyDto) {
    edition: Edition;
    ownerId: number;
}
