import stateList from "../../data/states.json";
import { findEntryByField, sortData } from "./utils";
import { IState } from "./interface";

const countryFields = ["countryId", "countryCode", "countryName"];

function getAllStates(): IState[] {
  return stateList;
}

function sortedStates(field: string): IState[] | undefined {
  if (!field) return undefined;

  return sortData(stateList, field);
}

function getStateOfCountry(
  field: string,
  value: string | number,
  sort?: string
): IState[] | undefined {
  if (!field || !value) return undefined;

  if (countryFields.includes(field)) return undefined;

  const data = findEntryByField(stateList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

function getFiltedStates(
  field: string,
  value: string | number,
  sort?: string
): IState[] | undefined {
  if (!field || !value) return undefined;

  const data = findEntryByField(stateList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

export default {
  getAllStates,
  sortedStates,
  getStateOfCountry,
  getFiltedStates,
};
