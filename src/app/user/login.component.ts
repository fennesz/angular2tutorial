import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    // tslint:disable-next-line:no-empty
    constructor(private authService: AuthService, private router: Router) { }

    // tslint:disable-next-line:no-empty
    public ngOnInit() { }

    private login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    private cancel() {
        this.router.navigate(['events']);
    }

}
