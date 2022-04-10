import {createReducer, on} from "@ngrx/store";
import {ICollectionData} from "../../../shared/models/search-response.model";
import {Patient} from "../../../shared/models/patient.model";
import {
    togglePatientFavourite,
    patientsNotReceived,
    patientsReceivedSuccessfully,
    receivePatients
} from "./patients.actions";

export const initialState: ICollectionData<Patient> = {
    key: undefined,
    count: undefined,
    data: undefined,
    undisplayedMatches: undefined,
    moreUncountedMatches: undefined,
    loading: undefined
};

export const patientsReducers = createReducer(
    initialState,
    on(receivePatients, (state) => ({...state, loading: true})),
    on(patientsReceivedSuccessfully, (state, patientsData) => ({...patientsData, loading: false})),
    on(patientsNotReceived, () => initialState),
    on(togglePatientFavourite, (state, patient) => {
        const patchedData = state?.data.map((item: Patient) => {
            return patient.defaultId === item.defaultId ? {...item, favourite: !item.favourite} : item
        })
        return {...state, data: patchedData}
    })
);