import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GridOptions,AgRendererComponent} from 'ag-grid/main';

import {AthleteService} from "./athlete.service";
import {Athlete} from "./athlete";


@Component({
    selector: 'star',
    template: `
        <span>
            <a *ngFor="let medal of medals" class="fa fa-star" [style.color]="color"></a>
        </span>
    `
})
class StarComponent implements AgRendererComponent {
    private params:any;
    private color:string;
    private medals:number = 3;

    agInit(params:any):void {
        this.params = params;

        // just to allow us to repeat the number of medals
        this.medals = Array(this.params.value).fill().map((x,i)=>i);

        // made available via cellRendererParams
        this.color = this.params.color;
    }
}

@Component({
    selector: 'athlete-grid',
    templateUrl: 'app/athlete-grid.component.html'
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
            //{headerName: "Gold", field: "gold", width: 100},
            //{headerName: "Silver", field: "silver", width: 100},
            //{headerName: "Bronze", field: "bronze", width: 100},
            {
                headerName: "Gold",
                field: "gold",
                cellRendererFramework: {
                    component: StarComponent,
                    moduleImports: [CommonModule]
                },
                cellRendererParams: {
                    color: "gold"
                },
                width: 100
            },
            {
                headerName: "Silver",
                field: "silver",
                cellRendererFramework: {
                    component: StarComponent,
                    moduleImports: [CommonModule]
                },
                cellRendererParams: {
                    color: "silver"
                },
                width: 100
            },
            {
                headerName: "Bronze",
                field: "bronze",
                cellRendererFramework: {
                    component: StarComponent,
                    moduleImports: [CommonModule]
                },
                cellRendererParams: {
                    color: "#CD7F32"
                },
                width: 100
            }
        ];
    }
}
