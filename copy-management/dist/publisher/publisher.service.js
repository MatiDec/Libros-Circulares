"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PublisherService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublisherService = void 0;
const common_1 = require("@nestjs/common");
const publisher_entity_1 = require("./entities/publisher.entity");
let PublisherService = class PublisherService {
    static { PublisherService_1 = this; }
    static publishers = [];
    create(createPublisherDto) {
        const newPublisher = new publisher_entity_1.Publisher;
        newPublisher.name = createPublisherDto.name;
        newPublisher.Id = Math.random();
        PublisherService_1.publishers.push(newPublisher);
        return newPublisher.Id;
    }
    findAll() {
        return PublisherService_1.publishers;
    }
    findOne(id) {
        const publisher = PublisherService_1.publishers.find((p) => p.Id === id);
        if (!publisher) {
            throw new common_1.NotFoundException();
        }
        else {
            return publisher;
        }
    }
    update(id, updatePublisherDto) {
        const publisher = this.findOne(id);
        if (!publisher) {
            throw new common_1.NotFoundException();
        }
        else {
            publisher.name = updatePublisherDto.name;
            return publisher;
        }
    }
    remove(id) {
        const publisher = this.findOne(id);
        if (!publisher) {
            throw new common_1.NotFoundException();
        }
        else {
            PublisherService_1.publishers = PublisherService_1.publishers.filter((p) => p.Id !== id);
            return true;
        }
    }
};
exports.PublisherService = PublisherService;
exports.PublisherService = PublisherService = PublisherService_1 = __decorate([
    (0, common_1.Injectable)()
], PublisherService);
//# sourceMappingURL=publisher.service.js.map