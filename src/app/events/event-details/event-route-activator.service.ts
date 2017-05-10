import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import { CreateEventComponent } from '../createevent/createevent.component';

@Injectable()
export class EventRouteActivatorService implements CanActivate,
CanDeactivate<CreateEventComponent> {
    private isDirty: boolean;

    constructor(private eventService: EventService, private router: Router) {
        this.isDirty = true;
    }

    public getDirtyState(): boolean {
        return this.isDirty;
    }
    public setDirtyState(isDirty: boolean): void {
        this.isDirty = isDirty;
    }

    public canDeactivate(): boolean {
        if (!this.isDirty) {
            let wantLeave: boolean = window.confirm(
                'You have something in an input field. Are you sure you want to leave?'
                );
            return wantLeave;
        }
        return this.isDirty;
    }

    public canActivate(route: ActivatedRouteSnapshot) {
        const decimalRadix: number = 10;
        if (this.eventService.getEvent(parseInt(route.params['id'], decimalRadix)) === undefined) {
            this.router.navigate(['/404']);
            return false;
        }
        return true;
    }
}