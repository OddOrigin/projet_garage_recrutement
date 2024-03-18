import {Garage_listComponent} from "./components/garage_list/garage_list.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {NgModule} from "@angular/core";
import {AppComponent} from "./components/app/app.component";
import {NgOptimizedImage} from "@angular/common";
import {HomePageComponent} from "./components/home_page/home_page.component";
import {GarageService} from "./model/garage/garage.service";
import {CarsService} from "./model/cars/cars.service";
import {Cars_listComponent} from "./components/cars_list/cars_list.component";
import {GarageFormComponent} from "./components/garage_form/garage_form.component";
import {CarsFormComponent} from "./components/cars_form/cars_form.component";



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
        GarageService,
        CarsService,
    ],
    declarations: [
        AppComponent,
        Garage_listComponent,
        HomePageComponent,
        Cars_listComponent,
        GarageFormComponent,
        CarsFormComponent,
    ],
})
export class AppModule {}