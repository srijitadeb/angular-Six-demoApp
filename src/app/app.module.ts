import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { DayComponentComponent } from './day-component/day-component.component';
import { DayComponent } from './dayComponent';
import { HelloComponent } from './HelloComponent';
import { WelcomeComponent } from './WelcomeComponent';
import { PersonComponent } from './person/person.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeListComponent } from './ParentComponent/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './ChildComponents/create-employee/create-employee.component';
import { NgbdModalBasic } from './modal-basic';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponentComponent,
    WelcomeComponentComponent,
    DayComponentComponent,
    DayComponent,
    HelloComponent,
    WelcomeComponent,
    PersonComponent,
    EventBindingComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
