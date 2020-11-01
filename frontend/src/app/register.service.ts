import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';

import {RegisterData} from './model/register_data';
import {SimpleResponse} from './model/response_data';
import {ServerConstants} from './constants/server_constants';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  public host = ServerConstants.host;
  public client = ServerConstants.client;
  constructor(private http: HttpClient) { }

  register(register_data: RegisterData): Observable<SimpleResponse> {
    return this.http.post<SimpleResponse>(`${this.client}/backend/register`, register_data);
  }
}
