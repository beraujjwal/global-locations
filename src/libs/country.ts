import countryList from "../../data/countries.json";
import { findEntryByField, sortData } from "./utils";
import { ICountry } from "./interface";

const regionFields = ["region", "regionId"];
const subRegionFields = ["subregion", "subregionId"];

function getAllCountries(): ICountry[] {
  return countryList;
}

function sortedCountries(field: string): ICountry[] | undefined {
  if (!field) return undefined;

  return sortData(countryList, field);
}

function getCountriesOfRegion(
  field: string,
  value: string | number,
  sort?: string
): ICountry[] | undefined {
  if (!field || !value) return undefined;

  if (regionFields.includes(field)) return undefined;

  const data = findEntryByField(countryList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

function getCountriesOfSubRegion(
  field: string,
  value: string | number,
  sort?: string
): ICountry[] | undefined {
  if (!field || !value) return undefined;

  if (subRegionFields.includes(field)) return undefined;

  const data = findEntryByField(countryList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

function getFiltedCountries(
  field: string,
  value: string | number,
  sort?: string
): ICountry[] | undefined {
  if (!field || !value) return undefined;

  const data = findEntryByField(countryList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

export default {
  getAllCountries,
  sortedCountries,
  getCountriesOfRegion,
  getCountriesOfSubRegion,
  getFiltedCountries,
};
