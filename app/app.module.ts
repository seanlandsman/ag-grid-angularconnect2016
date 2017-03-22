import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AgGridModule} from 'ag-grid-angular/main';

import {AppComponent} from "./app.component";
import {AthleteGridComponent} from "./components/athlete-grid.component";
import {AthleteService} from "./services/athlete.service";
import {StarComponent} from "./components/star.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        // to ensure that Angular compiler creates component factories for these components
        // inserts the components into entryComponents
        AgGridModule.withComponents(
            [StarComponent]
        )
    ],
    declarations: [
        AppComponent,
        AthleteGridComponent,
        StarComponent
    ],
    providers: [
        AthleteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
