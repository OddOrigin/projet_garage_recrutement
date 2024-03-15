import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {GarageService} from "../../model/garage/garage.service";
import {Garage} from "../../model/garage/garage";

@Component({
    selector: "app-garage-form",
    templateUrl: "./garage_form.component.html",
})

export class GarageFormComponent {
    garage: Garage;

    constructor(private router: Router, private garageService: GarageService) {
        this.garage = new Garage();
    }

    onSubmit() {
        this.garageService.save(this.garage).subscribe(result => this.gotoGarageList());
    }

    gotoGarageList() {
        this.router.navigate(["/garages"]);
    }
}

