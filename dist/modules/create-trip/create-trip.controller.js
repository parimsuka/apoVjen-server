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
exports.CreateTripController = void 0;
const common_1 = require("@nestjs/common");
const create_trip_service_1 = require("./create-trip.service");
const firestore_1 = require("firebase-admin/firestore");
const trip_1 = require("../model/trip");
let CreateTripController = class CreateTripController {
    constructor(createTripService) {
        this.createTripService = createTripService;
    }
    async createTrip(trip) {
        const newTrip = await (0, firestore_1.getFirestore)().collection('trips').add(JSON.parse(JSON.stringify(trip)));
        (0, firestore_1.getFirestore)().collection('trips').doc(newTrip.id).update({ id: newTrip.id });
        return newTrip.id;
    }
    async getAllTrips() {
        const tripsQuery = await (0, firestore_1.getFirestore)().collection('trips').get();
        return tripsQuery.docs.map((querySnapshot2) => (Object.assign({}, querySnapshot2.data())));
    }
    async getTripsNumberWithIdOwner(id) {
        return (await (0, firestore_1.getFirestore)().collection('trips').where("username", "==", id).get()).size;
    }
    deleteTrip(id) {
        (0, firestore_1.getFirestore)().collection('trips').doc(id).delete();
        (0, firestore_1.getFirestore)().collection('messages').where('tripID', '==', id).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trip_1.Trip]),
    __metadata("design:returntype", Promise)
], CreateTripController.prototype, "createTrip", null);
__decorate([
    (0, common_1.Get)('getAllTrips'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CreateTripController.prototype, "getAllTrips", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CreateTripController.prototype, "getTripsNumberWithIdOwner", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CreateTripController.prototype, "deleteTrip", null);
CreateTripController = __decorate([
    (0, common_1.Controller)('create-trip'),
    __metadata("design:paramtypes", [create_trip_service_1.CreateTripService])
], CreateTripController);
exports.CreateTripController = CreateTripController;
//# sourceMappingURL=create-trip.controller.js.map