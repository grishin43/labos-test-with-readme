import {createFeatureSelector} from "@ngrx/store";
import {ICollectionData} from "../../../shared/models/search-response.model";
import {Patient} from "../../../shared/models/patient.model";

export const selectPatients = createFeatureSelector<ICollectionData<Patient>>('patients');