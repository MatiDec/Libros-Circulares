import { CreateCopyDto } from './dto/create-copy.dto';
import { UpdateCopyDto } from './dto/update-copy.dto';
import { EditionService } from '../edition/edition.service';
import { Copy } from './entities/copy.entity';
export declare class CopyService {
    private readonly editionService;
    static copies: Copy[];
    constructor(editionService: EditionService);
    create(createCopyDto: CreateCopyDto): number;
    findAll(): Copy[];
    findOne(id: number): Copy;
    update(id: number, updateCopyDto: UpdateCopyDto): Copy;
    remove(id: number): boolean;
}
