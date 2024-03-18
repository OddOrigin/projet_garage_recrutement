import {Component} from "@angular/core";

import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "home-page",
    templateUrl: "./home_page.component.html",
})
export class HomePageComponent {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

}