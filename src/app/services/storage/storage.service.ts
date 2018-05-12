import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() { }

  public saveUser(token: string){
    return localStorage.setItem('currentUser', JSON.stringify({
      token:token
    }));
  }
  public getCurrentUser(){
    if(localStorage.getItem('currentUser')==null){
      return false;
    }
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
