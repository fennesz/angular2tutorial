import { Component } from '@angular/core';

@Component({
    selector: 'events-app',
    template: `
    <div>
        <app-navigation></app-navigation>
        <router-outlet></router-outlet>
    </div>
    `,
    styles: [`
        div {
            background-color: lightgrey;
        }
    `]

})
export class EventsAppComponent {
    

}
