import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FavouritesComponent} from "./components/favourites/favourites.component";

const routes: Routes = [
    {
        path: "",
        component: FavouritesComponent,
        data: {title: "stms.menu.favourites"}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FavouritesRoutingModule {
}
