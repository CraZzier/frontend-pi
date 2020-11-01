import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GettingDataService } from './getting-data.service';
import { RegisterData } from './model/register_data';



@Injectable({ providedIn: 'root' })

export class ProfileResolver implements Resolve<RegisterData> {
  constructor(private service: GettingDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<any>|Promise<any>|any {
    return this.service.getProfileData();
  }
}