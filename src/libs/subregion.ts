import subRegionList from "../../data/subregions.json";
import { findEntryByField, sortData } from "./utils";
import { ISubRegion } from "./interface";

const regionFields = ["region", "regionId"];

function getAllSubRegions(): ISubRegion[] {
  return subRegionList;
}

function sortedSubRegions(field: string): ISubRegion[] | undefined {
  if (!field) return undefined;

  return sortData(subRegionList, field);
}

function getSubRegionOfRegion(
  field: string,
  value: string | number,
  sort?: string
): ISubRegion[] | undefined {
  if (!field || !value) return undefined;

  if (regionFields.includes(field)) return undefined;

  const data = findEntryByField(subRegionList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

function getFiltedSubRegions(
  field: string,
  value: string | number,
  sort?: string
): ISubRegion[] | undefined {
  if (!field || !value) return undefined;

  const data = findEntryByField(subRegionList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

export default {
  getAllSubRegions,
  sortedSubRegions,
  getSubRegionOfRegion,
  getFiltedSubRegions,
};
