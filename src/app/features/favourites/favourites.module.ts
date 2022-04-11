import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavouritesComponent} from './components/favourites/favourites.component';
import {SharedModule} from "../../shared/shared.module";
import {FavouritesRoutingModule} from "./favourites-routing.module";

@NgModule({
    declarations: [
        FavouritesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FavouritesRoutingModule
    ]
})
export class FavouritesModule {
}
