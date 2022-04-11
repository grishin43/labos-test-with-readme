import {Component, Input, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import {ICollectionData} from "../../../models/search-response.model";
import {Patient} from "../../../models/patient.model";
import {detailExpand} from "../../../../core/animations/table.animations";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {TablesHelper} from "../../../static/tables.helper";

@Component({
    selector: 'st-patients-table',
    templateUrl: './patients-table.component.html',
    styleUrls: ['./patients-table.component.scss'],
    animations: [detailExpand]
})
export class PatientsTableComponent implements AfterViewInit {
    @Input() set patients(value: ICollectionData<Patient>) {
        this.patientsData = value;
        this.dataSource.data = value?.data || [];
    };

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @Output() favChanged = new EventEmitter<Patient>();

    public patientsData: ICollectionData<Patient>;
    public columnsToDisplay: string[] = ['code', 'firstName', 'sex', 'age', 'actions'];
    public expandedElement: Patient | null;
    public dataSource = new MatTableDataSource<Patient>();
    public pageSizeOptions = TablesHelper.pageSizeOptions;

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    public onFavClick(event: MouseEvent, patient: Patient): void {
        event.stopPropagation();
        event.preventDefault();
        this.favChanged.emit(patient);
    }

}
