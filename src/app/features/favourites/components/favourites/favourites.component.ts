import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {selectFavouritePatients} from "../../../patients/store/patients.selectors";
import {combineLatest, Observable} from "rxjs";
import {Patient} from "../../../../shared/models/patient.model";
import {Store} from "@ngrx/store";
import {ICollectionData} from "../../../../shared/models/search-response.model";
import {togglePatientFavourite} from "../../../patients/store/patients.actions";
import {Order} from "../../../../shared/models/order.model";
import {toggleOrderFavourite} from "../../../orders/store/orders.actions";
import {selectFavouriteOrders} from "../../../orders/store/orders.selectors";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";

@Component({
    selector: 'st-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouritesComponent {
    public orders$: Observable<ICollectionData<Order>> = this.store.select(selectFavouriteOrders);
    public patients$: Observable<ICollectionData<Patient>> = this.store.select(selectFavouritePatients);

    public orderNameFilter = new FormControl('');
    public orderNameFilter$: Observable<string>;
    public filteredOrdersCollection$: Observable<ICollectionData<Order>>;

    public patientNameFilter = new FormControl('');
    public patientNameFilter$: Observable<string>;
    public filteredPatientCollection$: Observable<ICollectionData<Patient>>;

    constructor(
        private store: Store
    ) {
        this.handlePatientsFilter();
        this.handleOrdersFilter();
    }

    private handlePatientsFilter(): void {
        this.patientNameFilter$ = this.patientNameFilter.valueChanges.pipe(startWith(''));
        this.filteredPatientCollection$ = combineLatest(this.patients$, this.patientNameFilter$).pipe(
            map(([collection, filterString]) => {
                return {
                    ...collection,
                    data: collection?.data
                        ?.filter((patient: Patient) => patient.firstName.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
                }
            })
        );
    }

    private handleOrdersFilter(): void {
        this.orderNameFilter$ = this.orderNameFilter.valueChanges.pipe(startWith(''));
        this.filteredOrdersCollection$ = combineLatest(this.orders$, this.orderNameFilter$).pipe(
            map(([collection, filterString]) => {
                return {
                    ...collection,
                    data: collection?.data
                        ?.filter((order: Order) => order.orderName.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
                }
            })
        );
    }

    public onPatientFavChanged(patient: Patient): void {
        this.store.dispatch(togglePatientFavourite(patient));
    }

    public onOrderFavChanged(order: Order): void {
        this.store.dispatch(toggleOrderFavourite(order));
    }

}
