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

    public isAuthenticated() {
        return !!this.currentUser;
    }
}