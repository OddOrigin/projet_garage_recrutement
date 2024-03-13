import {Component, OnInit} from "@angular/core";
import {Garage} from "../../model/garage/garage";
import {GarageService} from "../../model/garage/garage.service";

@Component({
    selector: "app-garages-list",
    templateUrl: "./garage_list.component.html",
})
export class Garage_listComponent implements OnInit {
    garages: Garage[] | undefined;

    constructor(private garageService: GarageService) {
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


/*
@Component({
    selector: "app-user-list",
    templateUrl: "./garage_list.component.html",
})
export class Garage_listComponent implements OnInit {
    users: User[] | undefined;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.findAll().subscribe(data => {
            this.users = data;
        });
    }
}*/
