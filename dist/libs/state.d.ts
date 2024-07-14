import { IState } from "./interface";
declare function getAllStates(): IState[];
declare function sortedStates(field: string): IState[] | undefined;
declare function getStateOfCountry(field: string, value: string): IState[] | undefined;
declare function getFiltedStates(field: string, value: string): IState[] | undefined;
declare const _default: {
    getAllStates: typeof getAllStates;
    sortedStates: typeof sortedStates;
    getStateOfCountry: typeof getStateOfCountry;
    getFiltedStates: typeof getFiltedStates;
};
export default _default;
