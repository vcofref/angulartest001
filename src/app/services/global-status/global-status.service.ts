import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStatusService {
  public isLoggedIn: Boolean = false;
  public isLogged: Boolean = false;
  //constructor() { }
}
