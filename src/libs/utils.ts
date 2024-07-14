import { IRegion, ISubRegion, ICountry, IState, ICity } from "./interface";

export const findEntryByField = (
  source: any,
  field: string,
  value: string | number
): any | undefined => {
  if (field && value && source != null) {
    return source.filter(
      (single: any | undefined) => single && single[field] === value
    );
  }
  return undefined;
};

export const sortData = (source: any, field: string): any | undefined => {
  const sortedData = source
    .filter((single: any | undefined) => single !== undefined) // Filter out undefined values
    .sort((a: any, b: any) => {
      if (a![field] < b![field]) {
        return -1;
      }
      if (a![field] > b![field]) {
        return 1;
      }
      return 0;
    });
  return sortedData;
};
