import regionList from "../../data/regions.json";
import { findEntryByField, sortData } from "./utils";
import { IRegion } from "./interface";

// Get a list of all regions.
function getAllRegions(): IRegion[] {
  return regionList;
}

function sortedRegions(field: string): IRegion[] | undefined {
  if (!field) return undefined;

  return sortData(regionList, field);
}

function getFiltedRegions(
  field: string,
  value: string | number,
  sort?: string
): IRegion[] | undefined {
  if (!field || !value) return undefined;

  const data = findEntryByField(regionList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

export default {
  getAllRegions,
  sortedRegions,
  getFiltedRegions,
};
