import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ApiService} from "../../../core/api/service/api.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {OrdersActions, ordersNotReceived, ordersReceivedSuccessfully} from "./orders.actions";

@Injectable()
export class OrdersEffects {

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) {
    }

    public loadOrders$ = createEffect(() =>
        this.actions$.pipe(
            ofType(OrdersActions.RECEIVE),
            mergeMap(() => this.apiService.getOrders()
                .pipe(
                    map(patients => (ordersReceivedSuccessfully(patients))),
                    catchError(e => (of(ordersNotReceived(undefined))))
                )
            )
        )
    )

}