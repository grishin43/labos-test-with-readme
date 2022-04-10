import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ICollectionData} from "../../models/search-response.model";
import {Patient} from "../../models/patient.model";
import {detailExpand} from "../../../core/animations/table.animations";

@Component({
    selector: 'st-patients-table',
    templateUrl: './patients-table.component.html',
    styleUrls: ['./patients-table.component.scss'],
    animations: [detailExpand]
})
export class PatientsTableComponent {
    @Input() patients: ICollectionData<Patient>;

    @Output() favChanged = new EventEmitter<Patient>();

    public columnsToDisplay: string[] = ['code', 'firstName', 'sex', 'age', 'actions'];
    public expandedElement: Patient | null;

    public onFavClick(event: MouseEvent, patient: Patient): void {
        event.stopPropagation();
        event.preventDefault();
        this.favChanged.emit(patient);
    }

}
