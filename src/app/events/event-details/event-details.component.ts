import { IEvent } from '../shared/event.model';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component( {
    templateUrl: 'event-details.component.html',
    styles: [`
        .container {
            padding-left: 20px;
            padding-right: 20px;
        }
        .event-image {
            height: 100px;
        }
    `]
})


export class EventDetailsComponent implements OnInit {
    private event: IEvent;

    constructor(private eventService: EventService, private router: ActivatedRoute) {
    }
    public ngOnInit() {
        this.event = this.eventService.getEvent(+this.router.snapshot.params['id'])
    }

}