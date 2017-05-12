import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from './user.model';
import { AuthService } from './auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }

    .error input {
      background-color: #E3C3C5;
    }

    .error ::-webkit-input-placeholder {
      color: #999;
    }

    .error ::-moz-placeholder {
      color: #999; 
    }
    .error :-moz-placeholder {
      color: #999; 
    } 
    .error ::-ms-input-placeholder {
      color: #999; 
    }

  `],
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public currentUser: IUser;
  public firstName: FormControl;
  public lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) {}

  public ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.firstName = new FormControl(this.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup( {
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  public cancelClicked() {
    this.router.navigate(['events']);
  }

  public firstNameValidated(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  public lastNameValidated(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  public saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.setCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }
}
