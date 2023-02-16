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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTripController = void 0;
const common_1 = require("@nestjs/common");
const book_trip_service_1 = require("./book-trip.service");
const firestore_1 = require("firebase-admin/firestore");
var admin = require('firebase-admin');
let BookTripController = class BookTripController {
    constructor(bookTripService) {
        this.bookTripService = bookTripService;
    }
    async bookTrip(data) {
        return (0, firestore_1.getFirestore)().collection('trips')
            .doc(data.tripID)
            .update({ availablePlaces: admin.firestore.FieldValue.increment(-1),
            bookedBy: admin.firestore
                .FieldValue
                .arrayUnion(data.userID) });
    }
    async deleteUserFromBookedTrip(tripID, userID) {
        return (0, firestore_1.getFirestore)().collection('trips')
            .doc(tripID)
            .update({ availablePlaces: admin.firestore.FieldValue.increment(1),
            bookedBy: admin.firestore
                .FieldValue
                .arrayRemove(userID) });
    }
    async getTripsWithIdOwner(id) {
        const tripsQuery = await (0, firestore_1.getFirestore)().collection('trips').where("username", "==", id).get();
        return tripsQuery.docs.map((querySnapshot2) => (Object.assign({}, querySnapshot2.data())));
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookTripController.prototype, "bookTrip", null);
__decorate([
    (0, common_1.Delete)(''),
    __param(0, (0, common_1.Query)('tripID')),
    __param(1, (0, common_1.Query)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BookTripController.prototype, "deleteUserFromBookedTrip", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookTripController.prototype, "getTripsWithIdOwner", null);
BookTripController = __decorate([
    (0, common_1.Controller)('book-trip'),
    __metadata("design:paramtypes", [book_trip_service_1.BookTripService])
], BookTripController);
exports.BookTripController = BookTripController;
//# sourceMappingURL=book-trip.controller.js.map