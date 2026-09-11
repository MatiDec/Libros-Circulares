"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CopyService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyService = void 0;
const common_1 = require("@nestjs/common");
const edition_service_1 = require("../edition/edition.service");
const copy_entity_1 = require("./entities/copy.entity");
let CopyService = class CopyService {
    static { CopyService_1 = this; }
    editionService;
    static copies = [];
    constructor(editionService) {
        this.editionService = editionService;
    }
    create(createCopyDto) {
        const edition = this.editionService.findOne(createCopyDto.edition.Id);
        const newCopy = new copy_entity_1.Copy;
        newCopy.edition = edition;
        newCopy.Id = Math.random();
        newCopy.ownerId = Math.random();
        CopyService_1.copies.push(newCopy);
        return newCopy.Id;
    }
    findAll() {
        return CopyService_1.copies;
    }
    findOne(id) {
        const copy = CopyService_1.copies.find((c) => c.Id === id);
        if (!copy) {
            throw new common_1.NotFoundException();
        }
        else {
            return copy;
        }
    }
    update(id, updateCopyDto) {
        const copy = this.findOne(id);
        if (!copy) {
            throw new common_1.NotFoundException();
        }
        else {
            copy.edition = this.editionService.findOne(updateCopyDto.edition.Id);
            return copy;
        }
    }
    remove(id) {
        const copy = this.findOne(id);
        if (!copy) {
            throw new common_1.NotFoundException();
        }
        else {
            CopyService_1.copies = CopyService_1.copies.filter((c) => c.Id !== id);
            return true;
        }
    }
};
exports.CopyService = CopyService;
exports.CopyService = CopyService = CopyService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [edition_service_1.EditionService])
], CopyService);
//# sourceMappingURL=copy.service.js.map