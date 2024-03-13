import {Component} from "@angular/core";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = "Garage Management System";
    }
}
