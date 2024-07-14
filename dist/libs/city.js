"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cities_json_1 = __importDefault(require("../../data/cities.json"));
const utils_1 = require("./utils");
const KEYS = [
    "id",
    "name",
    "stateId",
    "stateCode",
    "stateName",
    "countryId",
    "countryCode",
    "countryName",
    "latitude",
    "longitude",
    "wikiDataId",
];
const countryFields = ["countryId", "countryCode", "countryName"];
const stateFields = ["stateId", "stateCode", "stateName"];
// let convertedCityList: ICity[] = [];
// // Get a list of all cities.
// function getAllCities(keys: string[] = KEYS): ICity[] {
//   if (convertedCityList.length) {
//     return convertedCityList;
//   }
//   const cityJSON: ICity[] = cityList;
//   convertedCityList = convertArrayToObject(keys ?? KEYS, cityJSON);
//   return convertedCityList;
// }
function getAllCities() {
    return cities_json_1.default;
}
function sortedCities(field) {
    if (!field)
        return undefined;
    return (0, utils_1.sortData)(cities_json_1.default, field);
}
function getCitiesOfCountry(field, value, sort) {
    if (!field || !value)
        return undefined;
    if (!countryFields.includes(field))
        return undefined;
    const cities = (0, utils_1.findEntryByField)(cities_json_1.default, field, value);
    if (sort)
        return (0, utils_1.sortData)(cities, sort);
    else
        return cities;
}
function getCitiesOfState(field, value, sort) {
    if (!field || !value)
        return undefined;
    if (!stateFields.includes(field))
        return undefined;
    const cities = (0, utils_1.findEntryByField)(cities_json_1.default, field, value);
    if (sort)
        return (0, utils_1.sortData)(cities, sort);
    else
        return cities;
}
function getFiltedCities(field, value, sort) {
    if (!field || !value)
        return undefined;
    const cities = (0, utils_1.findEntryByField)(cities_json_1.default, field, value);
    if (sort)
        return (0, utils_1.sortData)(cities, sort);
    else
        return cities;
}
exports.default = {
    getAllCities,
    sortedCities,
    getCitiesOfCountry,
    getCitiesOfState,
    getFiltedCities,
};
