import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {ApiRouteEnum} from "../models/api-route.enum";
import {ISearch, ICollectionData, ISearchResponseData} from "../../../shared/models/search-response.model";
import {Order} from "../../../shared/models/order.model";
import {Injectable} from "@angular/core";
import {Patient} from "../../../shared/models/patient.model";
import {ApiHelper} from "../static/api.helper";

@Injectable()
export class ApiService {
    private readonly apiEp = environment.mockApi;

    constructor(
        private http: HttpClient
    ) {
    }

    public getPatients(): Observable<ICollectionData<Patient>> {
        return ApiHelper.mapResponse(
            this.http.get<ISearch & ISearchResponseData<Patient>>(`${this.apiEp}/${ApiRouteEnum.PATIENTS}`)
        );
    }

    public getOrders(): Observable<ICollectionData<Order>> {
        return ApiHelper.mapResponse(
            this.http.get<ISearch & ISearchResponseData<Order>>(`${this.apiEp}/${ApiRouteEnum.ORDERS}`)
        );
    }

}
