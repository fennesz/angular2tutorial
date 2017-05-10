import { IEvent } from './shared/event.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../events/shared/event.service";
import { ToastrService } from "../common/toastr.service";

@Component({
    selector: 'event-list',
    templateUrl: 'events-list.component.html',
    styleUrls: ['events-list.component.css']
})

export class EventListComponent implements OnInit {
    private events: IEvent;

    constructor(private eventService: EventService,
                private toastrService: ToastrService,
                private route: ActivatedRoute) {}

    public ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  private eventClicked(name) {
    this.toastrService.success(name);
  }
}