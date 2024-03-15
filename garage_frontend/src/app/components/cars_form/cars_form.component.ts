import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CarsService} from "../../model/cars/cars.service";
import {Cars} from "../../model/cars/cars";
import {GarageService} from "../../model/garage/garage.service";
import {Garage} from "../../model/garage/garage";

@Component({
    selector: "app-cars-form",
    templateUrl: "./cars_form.component.html",
})

export class CarsFormComponent implements OnInit{
    cars: Cars;
    garages : Garage[] = [];

    constructor(private router: Router, private carsService: CarsService, private garageService: GarageService) {
        this.cars = new Cars();
    }
    ngOnInit(){
        this.garageService.findAll().subscribe(data => {
            this.garages = data;
        });
    }

    onSubmit() {
        this.carsService.save(this.cars).subscribe(result => this.goToCarsList());
    }

    goToCarsList() {
        this.router.navigate(["/cars"]);
    }


}
