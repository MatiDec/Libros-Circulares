import { Edition } from "../../edition/entities/edition.entity";

export class CreateCopyDto {
    edition: Edition;
    ownerId: number;
}
