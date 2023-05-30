import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SucessComponent } from './sucess/sucess.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SucessComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
