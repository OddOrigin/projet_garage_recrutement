import {Component} from "@angular/core";
import {UserService} from "../../model/user.service";
import {User} from "../../model/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "home-page",
    templateUrl: "./home_page.component.html",
})
export class HomePageComponent {

    constructor(private router: Router, private userService: UserService) {
    }

}