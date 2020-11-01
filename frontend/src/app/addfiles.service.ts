import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';

import {ServerConstants} from './constants/server_constants';
import { SimpleResponse } from './model/response_data';
import { RegisterData } from './model/register_data';

@Injectable({
  providedIn: 'root'
})
export class AddFilesService {

  public host = ServerConstants.host;
  public client = ServerConstants.client;
  constructor(private http: HttpClient) { }
  
  submitFiles(file: FormData): Observable<SimpleResponse> {
    return this.http.post<SimpleResponse>(`${this.client}/backend/imageUpload`, file, {});
  }
}
