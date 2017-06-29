import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SecurityRouteService {

  private uri = 'https://security-settings-ws.herokuapp.com/';
  private getAllUsersURL = this.uri+'getAllUsers';  // URL to web API
  private getUserByIdURL = this.uri+'getUserById';
  private getAlertsDevicesCrossUsersURL = this.uri+'getAlertsDevicesCrossUsers';

  constructor (private http: Http) {}

  getAllUsers() {
    return this.http.get(this.getAllUsersURL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUserById(id) {
    return this.http.get(this.getUserByIdURL+"/"+id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAlertsDevicesCrossUsers(params) {
    return this.http.post(this.getAlertsDevicesCrossUsersURL,params)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
  }

}
