import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ICollectionData} from "../../../shared/models/search-response.model";
import {Order} from "../../../shared/models/order.model";

export const selectOrders = createFeatureSelector<ICollectionData<Order>>('orders');

export const selectFavouriteOrders = createSelector(
    selectOrders,
    (state: ICollectionData<Order>) => {
        return {
            ...state,
            data: state.data?.filter((o: Order) => o.favourite)
        }
    }
);