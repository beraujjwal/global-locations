"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regions_json_1 = __importDefault(require("../../data/regions.json"));
const utils_1 = require("./utils");
// Get a list of all regions.
function getAllRegions() {
    return regions_json_1.default;
}
function sortedRegions(field) {
    if (!field)
        return undefined;
    return (0, utils_1.sortData)(regions_json_1.default, field);
}
function getFiltedRegions(field, value) {
    if (!field || !value)
        return undefined;
    return (0, utils_1.findEntryByField)(regions_json_1.default, field, value);
}
exports.default = {
    getAllRegions,
    sortedRegions,
    getFiltedRegions,
};
