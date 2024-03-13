import {Component, OnInit} from "@angular/core";
import {UserService} from "../../model/user.service";
import {User} from "../../model/user";

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
}