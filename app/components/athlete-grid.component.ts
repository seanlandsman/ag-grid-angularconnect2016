import {Component, OnInit} from '@angular/core';

import {GridOptions} from 'ag-grid/main';

import {AthleteService} from "../services/athlete.service";
import {Athlete} from "../athlete";
import {StarComponent} from "./star.component";

@Component({
    moduleId: module.id,
    selector: 'athlete-grid',
    templateUrl: 'athlete-grid.component.html'
})
export class AthleteGridComponent implements OnInit {
    private gridOptions:GridOptions;

    constructor(private athleteService:AthleteService) {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    ngOnInit() {
        this.athleteService.getAthletes()
            .subscribe(
                athletes => this.gridOptions.api.setRowData(athletes),
                error => console.log(error)
            );
    }

    private createColumnDefs() {
        return [
            {headerName: "Athlete", field: "athlete", width: 200},
            {headerName: "Sport", field: "sport", width: 100},
            {headerName: "Year", field: "year", width: 80},

            // 1) comment these 3 out
            {headerName: "Gold", field: "gold", width: 120},
            {headerName: "Silver", field: "silver", width: 120},
            {headerName: "Bronze", field: "bronze", width: 120},

            // 2) uncomment these 3
            // {
            //    headerName: "Gold",
            //    field: "gold",
            //    cellRendererFramework: StarComponent,
            //    cellRendererParams: {
            //        color: "gold"
            //    },
            //    width: 120
            // },
            // {
            //    headerName: "Silver",
            //    field: "silver",
            //    cellRendererFramework: StarComponent,
            //    cellRendererParams: {
            //        color: "silver"
            //    },
            //    width: 120
            // },
            // {
            //    headerName: "Bronze",
            //    field: "bronze",
            //    cellRendererFramework: StarComponent,
            //    cellRendererParams: {
            //        color: "#CD7F32"
            //    },
            //    width: 120
            // }
        ];
    }
}
