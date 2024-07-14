"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortData = exports.findEntryByField = void 0;
const findEntryByField = (source, field, value) => {
    if (field && value && source != null) {
        return source.filter((single) => single && single[field] === value);
    }
    return undefined;
};
exports.findEntryByField = findEntryByField;
const sortData = (source, field) => {
    const sortedData = source
        .filter((single) => single !== undefined) // Filter out undefined values
        .sort((a, b) => {
        if (a[field] < b[field]) {
            return -1;
        }
        if (a[field] > b[field]) {
            return 1;
        }
        return 0;
    });
    return sortedData;
};
exports.sortData = sortData;
