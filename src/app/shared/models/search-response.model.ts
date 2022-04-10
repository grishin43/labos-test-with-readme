export interface ISearch {
    count: number;
    undisplayedMatches: number;
    moreUncountedMatches: boolean;
}

export interface ICollectionData<T> extends ISearch {
    key?: string;
    data: T[];
    loading?: boolean;
}

export interface ISearchResponseData<T> {
    [key: string]: T[];
}