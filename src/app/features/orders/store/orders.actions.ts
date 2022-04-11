import {createAction, props} from "@ngrx/store";
import {ICollectionData} from "../../../shared/models/search-response.model";
import {Order} from "../../../shared/models/order.model";

export enum OrdersActions {
    RECEIVE = 'Receive Orders',
    RECEIVED_SUCCESSFULLY = 'Received Orders Successfully',
    NOT_RECEIVED = 'Orders Retrieval Error',
    TOGGLE_FAVOURITE = 'Toggle Order Favourite Field'
}

export const receiveOrders = createAction(
    OrdersActions.RECEIVE
)

export const ordersReceivedSuccessfully = createAction(
    OrdersActions.RECEIVED_SUCCESSFULLY,
    props<ICollectionData<Order>>()
);

export const ordersNotReceived = createAction(
    OrdersActions.NOT_RECEIVED,
    props<ICollectionData<Order>>()
)

export const toggleOrderFavourite = createAction(
    OrdersActions.TOGGLE_FAVOURITE,
    props<Order>()
)