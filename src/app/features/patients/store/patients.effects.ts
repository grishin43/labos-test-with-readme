import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ApiService} from "../../../core/api/service/api.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {PatientsActions, patientsNotReceived, patientsReceivedSuccessfully} from "./patients.actions";
import {of} from "rxjs";

@Injectable()
export class PatientsEffects {

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) {
    }

    public loadPatients$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PatientsActions.RECEIVE),
            mergeMap(() => this.apiService.getPatients()
                .pipe(
                    map(patients => (patientsReceivedSuccessfully(patients))),
                    catchError(e => (of(patientsNotReceived(undefined))))
                )
            )
        )
    )

}