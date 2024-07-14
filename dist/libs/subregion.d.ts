import { ISubRegion } from "./interface";
declare function getAllSubRegions(): ISubRegion[];
declare function sortedSubRegions(field: string): ISubRegion[] | undefined;
declare function getSubRegionOfRegion(field: string, value: string): ISubRegion[] | undefined;
declare function getFiltedSubRegions(field: string, value: string): ISubRegion[] | undefined;
declare const _default: {
    getAllSubRegions: typeof getAllSubRegions;
    sortedSubRegions: typeof sortedSubRegions;
    getSubRegionOfRegion: typeof getSubRegionOfRegion;
    getFiltedSubRegions: typeof getFiltedSubRegions;
};
export default _default;
