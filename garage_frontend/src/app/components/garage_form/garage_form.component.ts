import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {GarageService} from "../../model/garage/garage.service";
import {Garage} from "../../model/garage/garage";
import {Cars} from "../../model/cars/cars";
import {CarsService} from "../../model/cars/cars.service";

@Component({
    selector: "app-garage-form",
    templateUrl: "./garage_form.component.html",
})

export class GarageFormComponent implements OnInit{
    garage: Garage;
    cars: Cars[];
    selectedCar: number;
    existingCars: Cars[];

    constructor(private router: Router, private garageService: GarageService, private route: ActivatedRoute, private carsService: CarsService) {
        this.garage = new Garage();
        this.cars = [];
        this.existingCars = [];
        this.selectedCar = 0;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.garageService.findById(params['id']).subscribe(data => {
                    this.garage = data;
                });
            }
        });
        this.carsService.findAll().subscribe(data => {
            this.existingCars = data;
        });
    }

    onSubmit() {
        if (this.garage.id > 0) {
            this.garageService.edit(this.garage.id, this.garage).subscribe(result => this.gotoGarageList());
        } else {
            this.garageService.save(this.garage).subscribe(result => this.gotoGarageList());
        }

    }

    //I Want a function to add a car to the garage

    addCar() {
        console.log('addCar method called');
        console.log('Existing cars:', this.existingCars);
        console.log('Selected car id:', this.selectedCar);
        const carToAdd = this.existingCars.find(car => Number(car.id) === Number(this.selectedCar));
        if (carToAdd){
            console.log('Car to add:', carToAdd);
            carToAdd.id = this.garage.id; // Update the garage_id attribute of the car
            this.carsService.edit(carToAdd.id, carToAdd).subscribe(result => { // Save the updated car to the database
                console.log('Car updated with new garage id');
            });
            this.garage.cars.push(carToAdd);
            this.garageService.edit(this.garage.id, this.garage).subscribe(result => {
                console.log('Garage updated with new car');
            });
        }else {
            console.log('No car found with id:', this.selectedCar);
        }
    }

    gotoGarageList() {
        this.router.navigate(["/garages"]);
    }
}

