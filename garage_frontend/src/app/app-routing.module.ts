import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./components/user_list/user-list.component";
import {NgModule} from "@angular/core";
import {UserFormComponent} from "./components/user_form/user-form.component";

export const routes: Routes = [
    { path: "users", component: UserListComponent },
    { path: "adduser", component: UserFormComponent },
];

@NgModule({
    imports: [RouterModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
