import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ICollectionData} from "../../../shared/models/search-response.model";
import {Patient} from "../../../shared/models/patient.model";

export const selectPatients = createFeatureSelector<ICollectionData<Patient>>('patients');

export const selectFavouritePatients = createSelector(
    selectPatients,
    (state: ICollectionData<Patient>) => {
        return {
            ...state,
            data: state.data?.filter((p: Patient) => p.favourite)
        }
    }
);