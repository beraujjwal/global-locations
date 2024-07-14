export interface Timezones {
    zoneName: string;
    gmtOffset: number;
    gmtOffsetName: string;
    abbreviation: string;
    tzName: string;
}
export interface Trans {
    kr?: string;
    "pt-BR"?: string;
    pt?: string;
    nl?: string;
    hr?: string;
    fa?: string;
    de?: string;
    es?: string;
    fr?: string;
    ja?: string;
    it?: string;
    cn?: string;
    tr?: string;
}
export interface Translation {
    korean: string;
    portuguese: string;
    dutch: string;
    croatian?: string;
    persian: string;
    german: string;
    spanish: string;
    french: string;
    japanese: string;
    italian: string;
    chinese: string;
}
export interface IRegion {
    id: number;
    name: string;
    translations: Trans;
    getAllRegions?(): IRegion[];
    sortedRegions?(): IRegion[];
    getFiltedRegions?(): IRegion[];
}
export interface ISubRegion {
    id: number;
    name: string;
    region: string;
    regionId: number;
    translations: Translation;
    getAllSubRegions?(): ISubRegion[];
    sortedSubRegions?(): ISubRegion[];
    getSubRegionOfRegion?(): ISubRegion[];
    getFiltedSubRegions?(): ISubRegion[];
}
export interface ICountry {
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numericCode: string;
    phoneCode: string;
    capital: string;
    currency: string;
    currencyName: string;
    currencySymbol: string;
    tld: string;
    native?: string | null;
    region?: string | null;
    regionId?: number | null;
    subregion?: string | null;
    subregionId?: number | null;
    nationality: string;
    timezones?: Timezones[] | null;
    translations: Trans;
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
    getAllCountries?(): ICountry[];
    sortedCountries?(): ICountry[];
    getCountriesOfRegion?(): ICountry[];
    getCountriesOfSubRegion?(): ICountry[];
    getFiltedCountries?(): ICountry[];
}
export interface IState {
    id: number;
    name: string;
    countryId: number;
    countryCode: string;
    countryName: string;
    stateCode: string;
    type?: string | null;
    latitude?: string | null;
    longitude?: string | null;
    getAllStates?(): IState[];
    sortedStates?(): IState[];
    getStateOfCountry?(): IState[];
    getFiltedStates?(): IState[];
}
export interface ICity {
    id: number;
    name: string;
    stateId?: number;
    stateCode?: string;
    stateName?: string;
    countryId?: number;
    countryCode?: string;
    countryName?: string;
    latitude?: string;
    longitude?: string;
    getAllCities?(): ICity[];
    sortedCities?(): ICity[];
    getCitiesOfCountry?(): ICity[];
    getCitiesOfState?(): ICity[];
    getFiltedCities?(): ICity[];
}
