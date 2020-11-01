import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';

import {LoginData} from './model/login_data';
import {ServerConstants} from './constants/server_constants';
import { SimpleResponse } from './model/response_data';
import { RegisterData } from './model/register_data';
import { DicomHeaders } from './model/image_headers';

@Injectable({
  providedIn: 'root'
})
export class GettingDataService {

  public host = ServerConstants.host;
  public client = ServerConstants.client;
  constructor(private http: HttpClient) { }
  
  getProfileData(): Observable<RegisterData> {
    return this.http.get<RegisterData>(`${this.client}/backend/getUserData`, {});
  }
  getIamgeHeaders(): Observable<DicomHeaders[]> {
    return this.http.get<DicomHeaders[]>(`${this.client}/backend/getImageHeaders`, {});
  }
}
