import { Component, OnInit } from "@angular/core";
import { CarDetailsService } from "../service/car-details.service";
import { Icardetails } from "../interfaces/Cardetails";
import { AddCarComponent } from "../add-car/add-car.component";
import { MatDialog, MatDialogRef } from "@angular/material";
import { from } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  isPopupOpened = true;
  selectedRow: number;
  //public registeredCarDetail = [];

  constructor(
    private dialog?: MatDialog,
    private _CarDetailsService?: CarDetailsService,
  ) {}

  ngOnInit() {
    this._CarDetailsService.getCarsInit().subscribe(data => {
      this._CarDetailsService._carList = data;
      console.log("home car list", this._CarDetailsService._carList);
    });
  }

  // to open a popup
  addNew(id: number): void {
    this._CarDetailsService.submitType = "Save";
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AddCarComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      console.log("The dialog was closed");
      //this.animal = result;
    });
  }

  onEdit(id: number) {
    this._CarDetailsService.submitType = "Edit";
    console.log(id);
    this.selectedRow = id;
    this.isPopupOpened = true;
    const car = Object.assign(
      {},
      this._CarDetailsService._carList[this.selectedRow - 1],
    );
    this._CarDetailsService.onSubmit(car, this.selectedRow);
    console.log(car);
    const dialogRef = this.dialog.open(AddCarComponent, {
      data: car,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      console.log("The dialog was closed");
      //this.animal = result;
    });
  }

  onDelete(id: number) {
    console.log(
      "deleted item",
      this._CarDetailsService._carList.splice(id - 1, 1),
    );
    this._CarDetailsService._carList.splice(id - 1, 1);
  }
}
