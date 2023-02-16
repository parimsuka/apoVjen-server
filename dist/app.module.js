"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const register_module_1 = require("./modules/register/register.module");
const create_trip_module_1 = require("./modules/create-trip/create-trip.module");
const users_module_1 = require("./modules/users/users.module");
const storage_module_1 = require("./modules/storage/storage.module");
const book_trip_module_1 = require("./modules/book-trip/book-trip.module");
const chat_module_1 = require("./modules/chat/chat.module");
const review_module_1 = require("./modules/review/review.module");
const complete_trip_module_1 = require("./modules/complete-trip/complete-trip.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [register_module_1.RegisterModule, create_trip_module_1.CreateTripModule, users_module_1.UsersModule, storage_module_1.StorageModule, book_trip_module_1.BookTripModule, chat_module_1.ChatModule, review_module_1.ReviewModule, complete_trip_module_1.CompleteTripModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map