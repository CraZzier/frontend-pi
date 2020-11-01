import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ZalogujComponent } from './zaloguj/zaloguj.component';
import{StartComponent} from './start/start.component';
import {ZarejestrujComponent} from './zarejestruj/zarejestruj.component';
import { FilescenterComponent } from './filescenter/filescenter.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth-guard.service'
import { AuthGuardReversed } from './auth-guard-reversed.service';
import { ProfileResolver } from './profile-resolver';
import { BrowserComponent } from './browser/browser.component';

const routes: Routes = [
  {path: '', component:StartComponent},
  {path: 'zaloguj', component: ZalogujComponent, canActivate: [AuthGuardReversed] },
  {path: 'zarejestruj', component: ZarejestrujComponent},
  {path: 'files', component: FilescenterComponent, canActivate: [AuthGuard],resolve:{data:ProfileResolver}},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],resolve:{data:ProfileResolver}},
  {path: 'browser', component: BrowserComponent, canActivate: [AuthGuard],resolve:{data:ProfileResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
