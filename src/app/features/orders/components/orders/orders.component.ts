import {Component, ChangeDetectionStrategy} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectOrders} from "../../store/orders.selectors";
import {Observable} from "rxjs";
import {ICollectionData} from "../../../../shared/models/search-response.model";
import {Order} from "../../../../shared/models/order.model";
import {OrdersActions, toggleOrderFavourite} from "../../store/orders.actions";

@Component({
    selector: "st-orders",
    templateUrl: "./orders.component.html",
    styleUrls: ["./orders.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {
    public orders$: Observable<ICollectionData<Order>> = this.store.select(selectOrders);

    constructor(
        private store: Store
    ) {
    }

    public getOrders(event: MouseEvent): void {
        event.preventDefault();
        this.store.dispatch({type: OrdersActions.RECEIVE});
    }

    public onFavChanged(order: Order): void {
        this.store.dispatch(toggleOrderFavourite(order));
    }
}
