import { ICity } from "./interface";
declare function getAllCities(): ICity[];
declare function sortedCities(field: string): ICity[] | undefined;
declare function getCitiesOfCountry(field: string, value: string, sort: string): ICity[] | undefined;
declare function getCitiesOfState(field: string, value: string, sort: string): ICity[] | undefined;
declare function getFiltedCities(field: string, value: string, sort: string): ICity[] | undefined;
declare const _default: {
    getAllCities: typeof getAllCities;
    sortedCities: typeof sortedCities;
    getCitiesOfCountry: typeof getCitiesOfCountry;
    getCitiesOfState: typeof getCitiesOfState;
    getFiltedCities: typeof getFiltedCities;
};
export default _default;
