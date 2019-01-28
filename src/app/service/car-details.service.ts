import { Injectable } from "@angular/core";
import { Icardetails } from "../interfaces/Cardetails";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, observable } from "rxjs";
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: "root",
})
export class CarDetailsService {
  private _url: string = "/assets/data/cars.json";

  _carList: Icardetails[] = [];

  submitType: string;
  selectedRow: number;

  constructor(private http: HttpClient) {
    this.getCarsInit().subscribe(carList => {
      this._carList = carList;
    });
  }

  getCarsInit(): Observable<Icardetails[]> {
    return this.http.get<Icardetails[]>(this._url);
  }

  // errorHandler(error:HttpErrorResponse){
  //   return observable.throw (error.message || 'Server Error');

  // }

  onSubmit(car: Icardetails, id: number) {
    console.log(id);
    this.selectedRow = id - 1;
    console.log(this._carList[this.selectedRow]);
    if (this.submitType === "Save") {
      console.log("add new", car);
      this._carList.push(car);
      console.log(this._carList);
    } else {
      console.log(this._carList[this.selectedRow]);
      //this._carList.onEdit(this._contactForm.value);
      // this._carList[this.selectedRow].model = this._carList.model;
      // this._carList[this.selectedRow].modelYr = this.regModel.modelYr;
      // this._carList[this.selectedRow].engineCapacity = this.regModel.engineCapacity;
      // this._carList[this.selectedRow].color = this.regModel.color;
    }
  }

  onEdit(id: number) {
    // this.submitType = "Edit";
    // console.log(id);
    // this.selectedRow = id;
    // //this.isPopupOpened = true;
    // const car = Object.assign(
    //   {},
    //   this._carList[this.selectedRow - 1],
    // );
    // console.log(car);
  }
}
