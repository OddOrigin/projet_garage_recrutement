import {Garage_listComponent} from "./components/garage_list/garage_list.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./model/user.service";
import {UserFormComponent} from "./components/user_form/user-form.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {NgModule} from "@angular/core";
import {AppComponent} from "./components/app/app.component";
import {NgOptimizedImage} from "@angular/common";
import {HomePageComponent} from "./components/home_page/home_page.component";
import {GarageService} from "./model/garage/garage.service";
import {CarsService} from "./model/cars/cars.service";
import {Cars_listComponent} from "./components/cars_list/cars_list.component";



@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        NgOptimizedImage,
    ],
    bootstrap: [AppComponent],
    providers: [
        UserService,
        GarageService,
        CarsService,
    ],
    declarations: [
        AppComponent,
        Garage_listComponent,
        UserFormComponent,
        HomePageComponent,
        Cars_listComponent,
    ],
})
export class AppModule {}