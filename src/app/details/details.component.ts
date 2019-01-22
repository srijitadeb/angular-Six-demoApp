import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  { CarDetailsService } from '../service/car-details.service'
import { Icardetails } from '../interfaces/Cardetails';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 registeredCarDetail:Icardetails[];
  car: Icardetails;

  constructor(
    private route:ActivatedRoute,
    //private CarDetailsService:CarDetailsService,
    private router: Router,
    private _CarDetailsService: CarDetailsService
  ) { }

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('index');
    this._CarDetailsService.getCardetails().subscribe(data => {
      console.log('data------', this.registeredCarDetail = data);
      this.car = this.registeredCarDetail[index];
      console.log('data-1-----',  this.car);
    })
  }
  goBack(){
    this.router.navigate(['home']);
  }

}
