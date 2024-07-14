"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const states_json_1 = __importDefault(require("../../data/states.json"));
const utils_1 = require("./utils");
const countryFields = ["countryId", "countryCode", "countryName"];
function getAllStates() {
    return states_json_1.default;
}
function sortedStates(field) {
    if (!field)
        return undefined;
    return (0, utils_1.sortData)(states_json_1.default, field);
}
function getStateOfCountry(field, value) {
    if (!field || !value)
        return undefined;
    if (countryFields.includes(field))
        return undefined;
    return (0, utils_1.findEntryByField)(states_json_1.default, field, value);
}
function getFiltedStates(field, value) {
    if (!field || !value)
        return undefined;
    return (0, utils_1.findEntryByField)(states_json_1.default, field, value);
}
exports.default = {
    getAllStates,
    sortedStates,
    getStateOfCountry,
    getFiltedStates,
};
