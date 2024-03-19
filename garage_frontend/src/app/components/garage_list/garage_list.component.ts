import {Component, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {Garage} from "../../model/garage/garage";
import {GarageService} from "../../model/garage/garage.service";


@Component({
    selector: "app-garages-list",
    templateUrl: "./garage_list.component.html",
})
export class Garage_listComponent implements OnInit {
    garages: Garage[] | undefined;
    garage: Garage;

    constructor(private garageService: GarageService) {
        this.garage = new Garage();
    }

    ngOnInit(): void {
        this.garageService.findAll().subscribe(data => {
            this.garages = data;
        });
    }

    deleteGarage(id: number) {
        this.garageService.delete(id).subscribe(data => {
            this.garageService.findAll().subscribe(data => {
                this.garages = data;
            });
        });
    }

}



