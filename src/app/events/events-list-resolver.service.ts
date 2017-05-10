import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";

@Injectable()
export class EventsListResolverService implements Resolve<any> {

    resolve() {
        return this.eventService.getEvents().map(events => events)
    }

    constructor(private eventService : EventService) { }

}