import {Observable} from "rxjs";
import {ISearch, ICollectionData, ISearchResponseData} from "../../../shared/models/search-response.model";
import {map} from "rxjs/operators";

export class ApiHelper {

    public static mapResponse(res: Observable<ISearch & ISearchResponseData<any>>): Observable<ICollectionData<any>> {
        return res?.pipe(
            map((searchRes: ISearch & ISearchResponseData<any>) => {
                const {count, undisplayedMatches, moreUncountedMatches, ...data} = searchRes;
                const mapped: ICollectionData<any> = {count, undisplayedMatches, moreUncountedMatches, data: []}
                for (const key in data) {
                    if (Array.isArray(data[key])) {
                        mapped.key = key;
                        mapped.data = data[key];
                        break;
                    }
                }
                return mapped;
            })
        )
    }

}