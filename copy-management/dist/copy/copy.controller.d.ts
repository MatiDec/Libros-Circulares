import { CopyService } from './copy.service';
import { CreateCopyDto } from './dto/create-copy.dto';
import { UpdateCopyDto } from './dto/update-copy.dto';
export declare class CopyController {
    private readonly copyService;
    constructor(copyService: CopyService);
    create(createCopyDto: CreateCopyDto): number;
    findAll(): import("./entities/copy.entity").Copy[];
    findOne(id: string): import("./entities/copy.entity").Copy;
    update(id: string, updateCopyDto: UpdateCopyDto): import("./entities/copy.entity").Copy;
    remove(id: string): boolean;
}
