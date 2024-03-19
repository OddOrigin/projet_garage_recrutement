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

export class GarageFormComponent implements OnInit {
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
                    this.carsService.findAll().subscribe(allCars => {
                        this.existingCars = allCars.filter(car => !this.garage.cars.some(garageCar => garageCar.id === car.id));
                    });
                });
            } else {
                this.carsService.findAll().subscribe(data => {
                    this.existingCars = data;
                });
            }
        });
    }

    onSubmit() {
        if (this.garage.id > 0) {
            console.log(this.garage);
            this.garageService.edit(this.garage.id, this.garage).subscribe(result => this.gotoGarageList());
        } else {
            this.garageService.save(this.garage).subscribe(result => this.gotoGarageList());
        }

    }

    addCar() {
        const carToAdd = this.existingCars.find(car => Number(car.id) === Number(this.selectedCar));
        if (carToAdd) {
            console.log('Car to add:', carToAdd);
            this.garage.cars.push(carToAdd);
        } else {
            console.log('No car found with id:', this.selectedCar);
        }
    }

    gotoGarageList() {
        this.router.navigate(["/garages"]);
    }


    removeCar(car: Cars) {
        console.log('removeCar method called');
        console.log('Car to remove:', car);
        this.garage.cars = this.garage.cars.filter(c => c.id !== car.id);
        console.log('Garage after removing car:', this.garage);
    }
}

