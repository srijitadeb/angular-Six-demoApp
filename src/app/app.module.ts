import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatGridListModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
import { NgbdModalBasicCreate } from './ChildComponents/create-employee/modal-basic-create'
import { UpdateEmployeeComponent } from './ChildComponents/update-employee/update-employee.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarDetailsService }from './service/car-details.service';

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
    NgbdModalBasic,
    NgbdModalBasicCreate,
    UpdateEmployeeComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    DetailsComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AddCarComponent],
  providers: [CarDetailsService,HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
