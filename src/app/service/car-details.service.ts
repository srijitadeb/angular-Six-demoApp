import { Injectable } from '@angular/core';
import { Icardetails } from '../interfaces/Cardetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  private _url: string ="/assets/data/cars.json";
  //private _CarDetailsService: CarDetailsService
  _carList: Icardetails[] =[];
  // private dataStore: {
  //   _carList: Icardetails[]
  // };


  constructor(private http: HttpClient) { 
    //this.dataStore = { _carList: [] };
  }

  getCardetails():Observable<Icardetails[]>{
    return this.http.get<Icardetails[]>(this._url);
  }

  addNew(car: Icardetails){
    //this._carList.push(car);
    console.log("add new",car);
    this.getCardetails()
      .subscribe(_carList => {
        console.log("car is ", _carList);
        this._carList.push(car);
       console.log("car is ", _carList);
      });
    //console.log("car is ", this._carList);
  }
}

