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
var EditionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditionService = void 0;
const common_1 = require("@nestjs/common");
const edition_entity_1 = require("./entities/edition.entity");
const publisher_service_1 = require("../publisher/publisher.service");
const book_service_1 = require("../book/book.service");
let EditionService = class EditionService {
    static { EditionService_1 = this; }
    bookService;
    publisherService;
    static editions = [];
    constructor(bookService, publisherService) {
        this.bookService = bookService;
        this.publisherService = publisherService;
    }
    create(createEditionDto) {
        const book = this.bookService.findOne(createEditionDto.book.Id);
        const publisher = this.publisherService.findOne(createEditionDto.publisher.Id);
        const newEdition = new edition_entity_1.Edition;
        newEdition.year = createEditionDto.year;
        newEdition.book = book;
        newEdition.publisher = publisher;
        newEdition.Id = Math.random();
        EditionService_1.editions.push(newEdition);
        return newEdition.Id;
    }
    findAll() {
        return EditionService_1.editions;
    }
    findOne(id) {
        const edition = EditionService_1.editions.find((e) => e.Id === id);
        if (!edition) {
            throw new common_1.NotFoundException();
        }
        else {
            return edition;
        }
    }
    update(id, updateEditionDto) {
        const edition = this.findOne(id);
        if (!edition) {
            throw new common_1.NotFoundException();
        }
        else {
            edition.year = updateEditionDto.year;
            edition.book = this.bookService.findOne(updateEditionDto.book.Id);
            edition.publisher = this.publisherService.findOne(updateEditionDto.publisher.Id);
            return edition;
        }
    }
    remove(id) {
        return `This action removes a #${id} edition`;
    }
};
exports.EditionService = EditionService;
exports.EditionService = EditionService = EditionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [book_service_1.BookService, publisher_service_1.PublisherService])
], EditionService);
//# sourceMappingURL=edition.service.js.map