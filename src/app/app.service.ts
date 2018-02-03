import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {foodList} from './model/food';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FoodService{

    private apiKEY: string = 'mdxeEij7jy8O9A8T89BrgbNp3StEhwFZf9yglJeY';
    private apiURL: string = 'http://45.79.76.22:7080/EasyRentals/';
    public searchURL : string = this.apiURL + 'EasyRentals/car/getCarList';
    public reportURL : string = 'https://api.nal.usda.gov/ndb/reports/?type=f&format=json&api_key=mdxeEij7jy8O9A8T89BrgbNp3StEhwFZf9yglJeY&ndbno='

    constructor(private http: Http) {
        }
    private handleError(error: any) {
        let errorMsg = error.message || `There was a problem with API and we couldn't retrieve your data!`
        console.error(errorMsg);
        // throw an application level error
        return Observable.throw(errorMsg);
    }
    search( query:string): Observable<any[]> {
        console.log('URL' + `${this.searchURL}`+query);
        let foolRportData = this.http
            .get(`${this.searchURL}`+query, { headers: this.getHeaders() })
            .map((response: Response) => response.json())
            .catch(this.handleError);
        return foolRportData;
    }
    private getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    report( query:string): Observable<foodList> {
        console.log('URL' + `${this.reportURL}`+query);
        let foolRportData = this.http
            .get(`${this.reportURL}`, { headers: this.getHeaders() })
            .map((response: Response) => response.json())
            .catch(this.handleError);
        return foolRportData;
    }

}