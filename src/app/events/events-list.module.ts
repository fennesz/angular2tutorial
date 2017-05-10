// Angular Imports
import { NgModule, Input } from '@angular/core';

// This Module's Components
import { EventListComponent } from './event-list.component';

@NgModule({
    imports: [

    ],
    declarations: [
        EventListComponent,
],
    exports: [
        EventListComponent,
    ]
})
export class EventListModule {
}
