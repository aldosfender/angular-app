import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private webService: HttpClient) {
     console.log('hellow from service');
  }

  getUsers(){
      return this.webService.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
