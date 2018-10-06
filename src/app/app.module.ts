import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApproutingModule } from './approuter.module';
import { AppComponent } from './app.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {
ApiService,
UserService,
AuthGuardService,
AuthService
} from '../services';
import { LandingPageComponent } from './pages';
import {ProgressComponent} from './components';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProgressComponent
  ],
  imports: [
    FontAwesomeModule,
    NgxPageScrollModule,
    ApproutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,
    HttpClient,
    ApiService,
    UserService,
    AuthService,
    AuthGuardService,
    ProgressComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
