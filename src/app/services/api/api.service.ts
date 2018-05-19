import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  public crearProyecto(jwtToken, data){
    let headers = new HttpHeaders({
      'Authorization':'Bearer ' + jwtToken
  });
  return this.http.post(environment.apiEndpoint + 'proyectos', data, {headers:headers});
  }

  public getProyectos(jwtToken){
    let headers = new HttpHeaders({
        'Authorization':'Bearer ' + jwtToken
    });
    return this.http.get(environment.apiEndpoint + 'proyectos', {headers:headers});
  }
  public informacionAuth0(token, data){
    let headers = new HttpHeaders({
        'Authorization':'Bearer ' + token
    });
    return this.http.post(environment.apiEndpoint + 'usuarios/auth0', data, {headers:headers});
  }
}
