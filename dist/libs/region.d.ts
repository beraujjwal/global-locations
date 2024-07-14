import { IRegion } from "./interface";
declare function getAllRegions(): IRegion[];
declare function sortedRegions(field: string): IRegion[] | undefined;
declare function getFiltedRegions(field: string, value: string): IRegion[] | undefined;
declare const _default: {
    getAllRegions: typeof getAllRegions;
    sortedRegions: typeof sortedRegions;
    getFiltedRegions: typeof getFiltedRegions;
};
export default _default;
