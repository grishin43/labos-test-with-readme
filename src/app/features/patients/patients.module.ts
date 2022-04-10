import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {PatientsRoutingModule} from "./patients-routing.module";
import {PatientsComponent} from "./components/patients/patients.component";

@NgModule({
    declarations: [
        PatientsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PatientsRoutingModule
    ]
})
export class PatientsModule {
}
