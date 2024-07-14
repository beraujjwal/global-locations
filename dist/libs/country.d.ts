import { ICountry } from "./interface";
declare function getAllCountries(): ICountry[];
declare function sortedCountries(field: string): ICountry[] | undefined;
declare function getCountriesOfRegion(field: string, value: string): ICountry[] | undefined;
declare function getCountriesOfSubRegion(field: string, value: string): ICountry[] | undefined;
declare function getFiltedCountries(field: string, value: string): ICountry[] | undefined;
declare const _default: {
    getAllCountries: typeof getAllCountries;
    sortedCountries: typeof sortedCountries;
    getCountriesOfRegion: typeof getCountriesOfRegion;
    getCountriesOfSubRegion: typeof getCountriesOfSubRegion;
    getFiltedCountries: typeof getFiltedCountries;
};
export default _default;
