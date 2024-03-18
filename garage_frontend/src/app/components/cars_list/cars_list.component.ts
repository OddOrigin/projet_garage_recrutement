import {Component, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {Cars} from "../../model/cars/cars";
import {CarsService} from "../../model/cars/cars.service";


@Component({
    selector: "app-cars-list",
    templateUrl: "./cars_list.component.html",
})
export class Cars_listComponent implements OnInit {
    cars: Cars[] | undefined;
    car : Cars;

    constructor(private carsService: CarsService){
        this.car = new Cars();
    }

    ngOnInit(): void {
        this.carsService.findAll().subscribe(data => {
            this.cars = data;
        });
    }

    deleteCars(id: number) {
        this.carsService.delete(id).subscribe(data => {
            this.carsService.findAll().subscribe(data => {
                this.cars = data;
            });
        });
    }


    editCars(id: number) {
        this.carsService.findById(id).subscribe(data => {
            this.car = data;
        });
    }

}