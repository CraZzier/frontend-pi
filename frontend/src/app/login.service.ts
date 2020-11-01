import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';

import {LoginData} from './model/login_data';
import {ServerConstants} from './constants/server_constants';
import { SimpleResponse } from './model/response_data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public host = ServerConstants.host;
  public client = ServerConstants.client;
  constructor(private http: HttpClient) { }
  
  login(login_data: LoginData): Observable<SimpleResponse> {
    return this.http.post<SimpleResponse>(`${this.client}/backend/login`, login_data, {withCredentials:true});
  }
  logout(): Observable<SimpleResponse> {
    return this.http.post<SimpleResponse>(`${this.client}/backend/logout`, {withCredentials:true});
  }
}
