import {Component, ChangeDetectionStrategy} from "@angular/core";
import {Store} from "@ngrx/store";
import {togglePatientFavourite, PatientsActions} from "../../store/patients.actions";
import {selectPatients} from "../../store/patients.selectors";
import {Patient} from "../../../../shared/models/patient.model";
import {Observable} from "rxjs";
import {ICollectionData} from "../../../../shared/models/search-response.model";

@Component({
    selector: "st-patients",
    templateUrl: "./patients.component.html",
    styleUrls: ["./patients.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent {
    public patients$: Observable<ICollectionData<Patient>> = this.store.select(selectPatients);

    constructor(
        private store: Store
    ) {
    }

    public getPatients(event: MouseEvent): void {
        event.preventDefault();
        this.store.dispatch({type: PatientsActions.RECEIVE});
    }

    public onFavChanged(patient: Patient): void {
        this.store.dispatch(togglePatientFavourite(patient));
    }

}
