import { Component, OnInit } from '@angular/core';
import  { CarDetailsService } from '../service/car-details.service'
import { Icardetails } from '../interfaces/Cardetails';
import { AddCarComponent } from '../add-car/add-car.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isPopupOpened = true;

  public registeredCarDetail = [];
  
  constructor(
    private dialog?: MatDialog,
    private _CarDetailsService?: CarDetailsService
    ) { }

  ngOnInit() {
    this._CarDetailsService.getCardetails()
      .subscribe(data => {
        console.log("cardetails page")
        this.registeredCarDetail = data
      });
  }

  addNew():void{
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AddCarComponent, {
      data: {}
    });

     dialogRef.afterClosed().subscribe(result => {
        this.isPopupOpened = false;
        console.log('The dialog was closed');
        //this.animal = result;
      });
  }

}
