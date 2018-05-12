import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as auth0 from 'auth0-js';
import { StorageService } from '../../services/storage/storage.service';
import { ApiService }  from '../../services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  // Obtengo las variables desde arrays en environment
  public webAuth = new auth0.WebAuth({
    clientID: environment.auth0.clientID,
    domain: environment.auth0.domain,
    responseType: environment.auth0.responseType,
    audience: environment.auth0.audience,
    redirectUri: environment.returnUrl,
    scope: environment.auth0.scope
  });
  constructor(
    private storage:StorageService,
    private api:ApiService
  ) {
    this.webAuth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let datos={
          auth0_user_id:authResult.idTokenPayload.sub
        };
        this.storage.saveUser(authResult.idToken);
        this.api.informacionAuth0(authResult.idToken,datos).subscribe((resultado) => {
          console.log(resultado)
        });
        console.log(authResult);
      } else if (err) {
        console.error(err);
      }
    });

  }

  ngOnInit() {
  }

  //modulo obtenido desde la web de documentación
  public login(): void {
    this.webAuth.authorize();
  }

}
