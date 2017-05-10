import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventRouteActivatorService } from '../event-details/event-route-activator.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateEventComponent implements OnInit {
  public inputText: string = '';


  constructor(private router: Router,
              private eventRouteActivator: EventRouteActivatorService) { }

  // tslint:disable-next-line:no-empty
  public ngOnInit() {
  }
  // tslint:disable-next-line:no-empty
  private onSubmitClick(event) {}

  private onCancelClick(event) {
    if (!this.isEmpty(this.inputText)) {
      this.eventRouteActivator.setDirtyState(false);
    }
    else {
      this.eventRouteActivator.setDirtyState(true);
    }
    this.router.navigate(['/events']);
  }

  private isEmpty(str: string) {
    let isEmpty: boolean = (!str || 0 === str.length);
    return isEmpty;
  }
}
