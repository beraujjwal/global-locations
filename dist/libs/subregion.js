"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subregions_json_1 = __importDefault(require("../../data/subregions.json"));
const utils_1 = require("./utils");
const regionFields = ["region", "regionId"];
function getAllSubRegions() {
    return subregions_json_1.default;
}
function sortedSubRegions(field) {
    if (!field)
        return undefined;
    return (0, utils_1.sortData)(subregions_json_1.default, field);
}
function getSubRegionOfRegion(field, value) {
    if (!field || !value)
        return undefined;
    if (regionFields.includes(field))
        return undefined;
    return (0, utils_1.findEntryByField)(subregions_json_1.default, field, value);
}
function getFiltedSubRegions(field, value) {
    if (!field || !value)
        return undefined;
    return (0, utils_1.findEntryByField)(subregions_json_1.default, field, value);
}
exports.default = {
    getAllSubRegions,
    sortedSubRegions,
    getSubRegionOfRegion,
    getFiltedSubRegions,
};
