import { IEvent } from '../shared/event.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent {
    @Input() private event: IEvent;

    private getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am') {
            return {'color': '#003300', 'font-weight': 'bold'};
        }

        if (this.event && this.event.time === '10:00 am') {
            return {'color': '#000033', 'font-weight': 'bold'};
        }
        return {};
    }
}
