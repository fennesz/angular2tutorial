import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private currentUser: IUser;
    constructor() { }

    public loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName,
            firstName: 'Martin',
            lastName: 'Clausen'
        };
    }

    public getCurrentUser(): IUser {
        return this.currentUser;
    }

    public isAuthenticated() {
        return !!this.currentUser;
    }

    public setCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}