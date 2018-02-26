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
    public listCarURL : string = this.apiURL + 'EasyRentals/car/listyourcar';


    constructor(private http: Http) {
        }
    private handleError(error: any) {
        let errorMsg = error.message || `There was a problem with API and we couldn't retrieve your data!`
        console.error(error);
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
        // will request text/html ins1tead of application/json
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');
        return headers;
    }
    listCar( carname :string) {
        console.log('URL' + `${this.listCarURL}`);
        let listcarstr = '{ \
          "address": { \
            "city": "San ramon", \
            "geoLocation": { \
              "latitude": 31.1, \
              "longitude": -120 \
            }, \
            "postalCode": 94583, \
            "state": "CA", \
            "street": "9260 Alcosta Blvd" \
          }, \
          "amount": 50, \
          "audioPlayer": true, \
          "bluetooth": true, \
          "contactNum": 0, \
          "drivingLicenseNumber": "1111", \
          "drivingLicenseState": "CA", \
          "gps": true, \
          "hybrid": true, \
          "licenseNum": "'+carname+'", \
          "make": "Honda", \
          "maximumDistance": "1000", \
          "model": "'+carname+'", \
          "odometer": 10000, \
          "petFriendly": true, \
          "style": "Hybrid", \
          "sunRoof": true, \
          "transmission": "Auto", \
          "withDriver": true, \
          "withoutDriver": true, \
          "year": "1900" \
        }';
        console.log(listcarstr);
        let foolRportData = this.http
            .put(`${this.listCarURL}`,listcarstr, { headers: this.getHeaders() })
            .toPromise()
            .then((response) => response.json()[1])
            .catch(this.handleError);
        console.log(foolRportData);
        return foolRportData;
    }

}