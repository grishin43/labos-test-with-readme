import {createReducer, on} from "@ngrx/store";
import {ICollectionData} from "../../../shared/models/search-response.model";
import {Order} from "../../../shared/models/order.model";
import {ordersNotReceived, ordersReceivedSuccessfully, receiveOrders, toggleOrderFavourite} from "./orders.actions";

export const initialState: ICollectionData<Order> = {
    key: undefined,
    count: undefined,
    data: undefined,
    undisplayedMatches: undefined,
    moreUncountedMatches: undefined,
    loading: undefined
};

export const ordersReducers = createReducer(
    initialState,
    on(receiveOrders, (state) => ({...state, loading: true})),
    on(ordersReceivedSuccessfully, (state, patientsData) => ({...patientsData, loading: false})),
    on(ordersNotReceived, () => initialState),
    on(toggleOrderFavourite, (state, patient) => {
        const patchedData = state?.data.map((item: Order) => {
            return patient.identifier === item.identifier ? {...item, favourite: !item.favourite} : item
        })
        return {...state, data: patchedData}
    })
);