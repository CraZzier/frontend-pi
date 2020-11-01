import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { StartmenuComponent } from './startmenu/startmenu.component';
import { FooterComponent } from './footer/footer.component';
import { ZalogujComponent } from './zaloguj/zaloguj.component';
import { ZarejestrujComponent } from './zarejestruj/zarejestruj.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilescenterComponent } from './filescenter/filescenter.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth-guard.service'
import { CheckingcookieService } from './checkingcookie.service';
import { LatermenuComponent } from './latermenu/latermenu.component';
import { AuthGuardReversed } from './auth-guard-reversed.service';
import { GettingDataService } from './getting-data.service';
import { NgxDropzoneModule, NgxDropzoneRemoveBadgeComponent } from 'ngx-dropzone';
import { BrowserComponent } from './browser/browser.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    StartmenuComponent,
    FooterComponent,
    ZalogujComponent,
    ZarejestrujComponent,
    FilescenterComponent,
    ProfileComponent,
    LatermenuComponent,
    BrowserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDropzoneModule,
  ],
  providers: [AuthGuard, CheckingcookieService,AuthGuardReversed, GettingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
