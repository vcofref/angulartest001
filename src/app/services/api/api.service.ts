import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }


  public informacionAuth0(token, data){
    let headers = new HttpHeaders({
        'Authorization':'Bearer ' + token
    });
    return this.http.post(environment.apiEndpoint + 'usuarios/auth0', data, {headers:headers});
  }
}
