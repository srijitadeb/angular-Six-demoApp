import { Component, OnInit, Inject } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { CarDetailsService } from "../service/car-details.service";
import { Icardetails } from "../interfaces/Cardetails";
import { HomeComponent } from "../home/home.component";
import { from } from "rxjs";
//import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-add-car",
  templateUrl: "./add-car.component.html",
  styleUrls: ["./add-car.component.css"],
})
export class AddCarComponent implements OnInit {
  public _newCarRegistrationForm: FormGroup;
  //private fireStore: AngularFirestore;
  _carList: any = [];
  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCarComponent>,
    private _CarDetailsService: CarDetailsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this._newCarRegistrationForm = this._formBuilder.group({
      model: [this.data.model, [Validators.required]],
      modelYr: [this.data.modelYr, [Validators.required]],
      engineCapacity: [this.data.engineCapacity, [Validators.required]],
      color: [this.data.color, [Validators.required]],
      transmissionMode: [this.data.transmissionMode, [Validators.required]],
      carType: [this.data.carType, [Validators.required]],
      price: [this.data.price, [Validators.required]],
      carModel: [this.data.carModel, [Validators.required]],
    });
  }

  //to create a new car
  onSave(id: number) {
    console.log("add new");
    this._CarDetailsService.onSubmit(this._newCarRegistrationForm.value, id);
    this.dialogRef.close();
  }
}
