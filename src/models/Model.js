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
exports.Model = void 0;
const database_1 = require("./../database");
class Model {
    static get table() {
        if (!this.tableName) {
            throw new Error('You must set a table name!');
        }
        return (0, database_1.database)(this.tableName);
    }
    static all() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.table;
        });
    }
    static insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.table.insert(data).returning('*');
            return result;
        });
    }
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.table.where({ id }).update(data).returning('*');
            return result;
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.table.where({ id }).del();
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.table.where('id', id).first();
        });
    }
    static findBy(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.table.where(data).first();
        });
    }
}
exports.Model = Model;
