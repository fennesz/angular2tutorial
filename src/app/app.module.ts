import { AuthService } from './user/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EventsAppComponent } from './app.component';
import { NavigationComponent } from "./nav/navigation/navigation.component";
import { ToastrService } from "./common/toastr.service";
import { AppRoutes } from "./app.routing";
import {Error404Component} from './errors/404.component'

import { 
    EventListComponent,
    CreateEventComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventService,
    EventRouteActivatorService,
    EventsListResolverService,

} from './events/'
import '../../node_modules/jquery/dist/jquery.min.js'

@NgModule({
    imports: [ 
        BrowserModule, 
        CommonModule, 
        AppRoutes,
        FormsModule, ],
    declarations: [
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        NavigationComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivatorService,
        EventsListResolverService,
        AuthService
        ],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }