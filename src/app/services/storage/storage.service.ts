import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() { }

  public saveUser(token: string, name: string, lastname: string, picture: string, user_id: string, email: string){
    return localStorage.setItem('currentUser', JSON.stringify({
      token:token,
      name:name,
      lastname:lastname,
      picture:picture,
      user_id:user_id,
      email:email
    }));
  }
  public getCurrentUser(){
    if(localStorage.getItem('currentUser')==null){
      return false;
    }
    return JSON.parse(localStorage.getItem('currentUser'));
  }

}
