import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { DayComponentComponent } from './day-component/day-component.component';
import { DayComponent } from './dayComponent';
import { HelloComponent } from './HelloComponent';
import { WelcomeComponent } from './WelcomeComponent';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponentComponent,
    WelcomeComponentComponent,
    DayComponentComponent,
    DayComponent,
    HelloComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
