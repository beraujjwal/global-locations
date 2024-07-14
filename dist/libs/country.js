"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countries_json_1 = __importDefault(require("../../data/countries.json"));
const utils_1 = require("./utils");
const regionFields = ["region", "regionId"];
const subRegionFields = ["subregion", "subregionId"];
function getAllCountries() {
    return countries_json_1.default;
}
function sortedCountries(field) {
    if (!field)
        return undefined;
    return (0, utils_1.sortData)(countries_json_1.default, field);
}
function getCountriesOfRegion(field, value) {
    if (!field || !value)
        return undefined;
    if (regionFields.includes(field))
        return undefined;
    return (0, utils_1.findEntryByField)(countries_json_1.default, field, value);
}
function getCountriesOfSubRegion(field, value) {
    if (!field || !value)
        return undefined;
    if (subRegionFields.includes(field))
        return undefined;
    return (0, utils_1.findEntryByField)(countries_json_1.default, field, value);
}
function getFiltedCountries(field, value) {
    if (!field || !value)
        return undefined;
    return (0, utils_1.findEntryByField)(countries_json_1.default, field, value);
}
exports.default = {
    getAllCountries,
    sortedCountries,
    getCountriesOfRegion,
    getCountriesOfSubRegion,
    getFiltedCountries,
};
