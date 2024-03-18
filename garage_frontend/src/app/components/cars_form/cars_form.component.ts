import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {CarsService} from "../../model/cars/cars.service";
import {Cars} from "../../model/cars/cars";
import {GarageService} from "../../model/garage/garage.service";
import {Garage} from "../../model/garage/garage";

@Component({
    selector: "app-cars-form",
    templateUrl: "./cars_form.component.html",
})

/*
export class CarsFormComponent implements OnInit{
    cars: Cars;


    constructor(private router: Router, private carsService: CarsService, private route: ActivatedRoute) {
        this.cars = new Cars();
    }

    ngOnInit(){
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.carsService.findById(params['id']).subscribe(car => this.cars = car);
            }
        });
    }
*/

export class CarsFormComponent implements OnInit {
    cars: Cars;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private carsService: CarsService
    ) {
        this.cars = new Cars();
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.carsService.findById(params['id']).subscribe(data => {
                    this.cars = data;
                });
            }
        });
    }

    onSubmit() {
        if (this.cars.id > 0) {
            this.carsService.edit(this.cars.id, this.cars).subscribe(result => this.goToCarsList());
        } else {
            this.carsService.save(this.cars).subscribe(result => this.goToCarsList());
        }
    }

    goToCarsList() {
        this.router.navigate(["/cars"]);
    }


}
