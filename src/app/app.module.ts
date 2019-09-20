import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularappComponent } from './angular-app/angular-app.component';
import { AngularCliComponent } from './angular-cli/angular-cli.component';
import { LfcplayerComponent } from './lfcplayer/lfcplayer.component';

import { WebserviceService } from './webservice.service'

@NgModule({
  declarations: [
    AppComponent,
    AngularappComponent,
    AngularCliComponent,
    LfcplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WebserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
