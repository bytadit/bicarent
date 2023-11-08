"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
require('dotenv').config();
const faker_1 = require("@faker-js/faker");
var CarSize;
(function (CarSize) {
    CarSize["Small"] = "Small";
    CarSize["Medium"] = "Medium";
    CarSize["Large"] = "Large";
})(CarSize || (CarSize = {}));
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex("cars").del();
        const cars = Array(10)
            .fill(null)
            .map((_, index) => ({
            id: index + 1,
            name: faker_1.faker.vehicle.vehicle().toLowerCase(),
            size: faker_1.faker.helpers.enumValue(CarSize),
            rent_per_day: faker_1.faker.number.int({ min: 100000, max: 1000000 }),
            img_id: faker_1.faker.string.uuid(),
            img_url: `./public/uploads/image${index}.jpg`,
        }));
        // Inserts seed entries
        yield knex("cars").insert(cars.map(car => (Object.assign({}, car))));
    });
}
exports.seed = seed;
;
