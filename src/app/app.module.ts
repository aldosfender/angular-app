import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularappComponent } from './angular-app/angular-app.component';
import { AngularCliComponent } from './angular-cli/angular-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularappComponent,
    AngularCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
