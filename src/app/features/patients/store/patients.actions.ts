import {createAction, props} from "@ngrx/store";
import {ICollectionData} from "../../../shared/models/search-response.model";
import {Patient} from "../../../shared/models/patient.model";

export enum PatientsActions {
    RECEIVE = 'Receive Patients',
    RECEIVED_SUCCESSFULLY = 'Received Patients Successfully',
    NOT_RECEIVED = 'Patients Retrieval Error',
    TOGGLE_PATIENT_FAVOURITE = 'Toggle Patient Favourite Field'
}

export const receivePatients = createAction(
    PatientsActions.RECEIVE
)

export const patientsReceivedSuccessfully = createAction(
    PatientsActions.RECEIVED_SUCCESSFULLY,
    props<ICollectionData<Patient>>()
);

export const patientsNotReceived = createAction(
    PatientsActions.NOT_RECEIVED,
    props<ICollectionData<Patient>>()
)

export const togglePatientFavourite = createAction(
    PatientsActions.TOGGLE_PATIENT_FAVOURITE,
    props<Patient>()
)