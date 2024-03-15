import {RouterModule, Routes} from '@angular/router';
import {Garage_listComponent} from "./components/garage_list/garage_list.component";
import {NgModule} from "@angular/core";
import {UserFormComponent} from "./components/user_form/user-form.component";
import {HomePageComponent} from "./components/home_page/home_page.component";
import {Cars_listComponent} from "./components/cars_list/cars_list.component";
import {GarageFormComponent} from "./components/garage_form/garage_form.component";
import {CarsFormComponent} from "./components/cars_form/cars_form.component";

export const routes: Routes = [
    { path: "garages", component: Garage_listComponent },
    { path: "cars", component: Cars_listComponent },
    { path: "home", component : HomePageComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: "addgarage", component: GarageFormComponent},
    { path: "addcars", component: CarsFormComponent}
];

@NgModule({
    imports: [RouterModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
