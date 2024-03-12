import {Component} from "@angular/core";
import {UserService} from "../../model/user.service";
import {User} from "../../model/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "app-user-form",
    templateUrl: "./user-form.component.html",
})
export class UserFormComponent {
    user: User;

    constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
        this.user = new User();
    }

    onSubmit() {
        this.userService.save(this.user).subscribe(result => this.gotoUserList());
    }

    gotoUserList() {
        this.router.navigate(["/users"]);
    }
}