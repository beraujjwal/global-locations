import cityList from "../../data/cities.json";
import { sortData, findEntryByField } from "./utils";
import { ICity } from "./interface";

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

function getAllCities(): ICity[] {
  return cityList;
}

function sortedCities(field: string): ICity[] | undefined {
  if (!field) return undefined;

  return sortData(cityList, field);
}

function getCitiesOfCountry(
  field: string,
  value: string | number,
  sort?: string
): ICity[] | undefined {
  if (!field || !value) return undefined;

  if (!countryFields.includes(field)) return undefined;

  const data = findEntryByField(cityList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

function getCitiesOfState(
  field: string,
  value: string | number,
  sort?: string
): ICity[] | undefined {
  if (!field || !value) return undefined;

  if (!stateFields.includes(field)) return undefined;

  const data = findEntryByField(cityList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

function getFiltedCities(
  field: string,
  value: string | number,
  sort?: string
): ICity[] | undefined {
  if (!field || !value) return undefined;

  const data = findEntryByField(cityList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

export default {
  getAllCities,
  sortedCities,
  getCitiesOfCountry,
  getCitiesOfState,
  getFiltedCities,
};
