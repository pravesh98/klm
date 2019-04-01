import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { SigninComponent } from 'src/authentication/signin/signin.component';
import {FormsModule} from '@angular/forms';
import { AuthenticationService } from 'src/services/authentication.service';
import { HttpModule } from '@angular/http';

//mocking
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
