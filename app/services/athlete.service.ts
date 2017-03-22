import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

import {Athlete} from "../athlete";

@Injectable()
export class AthleteService {
    private athletesUrl:string = 'app/olympicWinners.json';

    constructor(private http:Http) {
    }

    public getAthletes():Observable<Athlete[]> {
        return this.http.get(this.athletesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}