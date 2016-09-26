import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AgGridModule} from 'ag-grid-ng2/main';

import {AppComponent} from "./app.component";
import {AthleteGridComponent} from "./athlete-grid.component";
import {AthleteService} from "./athlete.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AgGridModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AthleteGridComponent
    ],
    providers: [
        AthleteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
