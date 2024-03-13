import {RouterModule, Routes} from '@angular/router';
import {Garage_listComponent} from "./components/user_list/garage_list.component";
import {NgModule} from "@angular/core";
import {UserFormComponent} from "./components/user_form/user-form.component";
import {HomePageComponent} from "./components/home_page/home_page.component";

export const routes: Routes = [
    { path: "garages", component: Garage_listComponent },
    { path: "cars", component: UserFormComponent },
    { path: "home", component : HomePageComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
