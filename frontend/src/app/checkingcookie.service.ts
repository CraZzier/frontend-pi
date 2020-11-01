import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';

import {LoginData} from './model/login_data';
import {ServerConstants} from './constants/server_constants';
import { SimpleResponse } from './model/response_data';

@Injectable({
  providedIn: 'root'
})
export class CheckingcookieService {
  public client = ServerConstants.client;
  constructor(private http: HttpClient) { }
  
  logincheck():Observable<SimpleResponse>  {
    return this.http.get<SimpleResponse>(`${this.client}/backend/logincheck`);
  }
}
