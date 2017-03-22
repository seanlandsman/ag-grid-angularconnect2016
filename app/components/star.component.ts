import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular/main';

@Component({
    selector: 'star',
    template: `
        <span>
            <a *ngFor="let medal of medals" class="fa fa-star" [style.color]="color"></a>
        </span>
    `
})
export class StarComponent implements AgRendererComponent {
    private params:any;
    private color:string;
    private medals:number[];

    agInit(params:any):void {
        this.params = params;

        // just to allow us to repeat the number of medals
        this.medals = Array(this.params.value).fill(this.params.value);

        // made available via cellRendererParams
        this.color = this.params.color;
    }
}