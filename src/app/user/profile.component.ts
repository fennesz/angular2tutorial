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

  constructor(private authService: AuthService, private router: Router) {}

  public ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    let firstName = new FormControl(this.currentUser.firstName, Validators.required);
    let lastName = new FormControl(this.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup( {
      firstName,
      lastName
    });
  }

  public cancelClicked() {
    this.router.navigate(['events']);
  }

  public saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.setCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }
}
