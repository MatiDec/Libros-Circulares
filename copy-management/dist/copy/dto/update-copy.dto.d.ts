import { CreateCopyDto } from './create-copy.dto';
import { Edition } from '../../edition/entities/edition.entity';
declare const UpdateCopyDto_base: import("@nestjs/mapped-types", { with: { "resolution-mode": "import" } }).MappedType<Partial<CreateCopyDto>>;
export declare class UpdateCopyDto extends UpdateCopyDto_base {
    edition: Edition;
    ownerId: number;
}
export {};
