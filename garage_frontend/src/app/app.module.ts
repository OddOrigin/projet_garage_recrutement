import {UserListComponent} from "./components/user_list/user-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./model/user.service";
import {UserFormComponent} from "./components/user_form/user-form.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {NgModule} from "@angular/core";
import {AppComponent} from "./components/app/app.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        UserService,
    ],
    declarations: [
        AppComponent,
        UserListComponent,
        UserFormComponent,
    ],
})
export class AppModule {}