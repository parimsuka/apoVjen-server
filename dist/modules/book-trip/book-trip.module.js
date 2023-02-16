"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTripModule = void 0;
const common_1 = require("@nestjs/common");
const book_trip_service_1 = require("./book-trip.service");
const book_trip_controller_1 = require("./book-trip.controller");
let BookTripModule = class BookTripModule {
};
BookTripModule = __decorate([
    (0, common_1.Module)({
        controllers: [book_trip_controller_1.BookTripController],
        providers: [book_trip_service_1.BookTripService]
    })
], BookTripModule);
exports.BookTripModule = BookTripModule;
//# sourceMappingURL=book-trip.module.js.map