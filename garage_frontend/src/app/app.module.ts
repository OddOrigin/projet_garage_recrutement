import {NgModule} from "@angular/core";
import {AppComponent} from "./components/app/app.component";
import {UserListComponent} from "./components/user_list/user-list.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./model/user.service";
import {UserFormComponent} from "./components/user_form/user-form.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserFormComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [
        UserService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}