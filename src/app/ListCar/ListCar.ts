import { Component } from '@angular/core';
import { FoodService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './ListCar.html',
  styleUrls: ['./ListCar.css']
})
export class ListCar {
  title = 'List Car';
  result: any ;
  errorMessage: any;
  param :any ;
  
  constructor(private route: ActivatedRoute,
  private location: Location,
  private foodService: FoodService) {
     //this.foodService = foodService;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("In the Constructor of Detail");
  
      
    };
    
    ngOnInit(){
    this.param = +this.route.snapshot.paramMap.get('id');
    console.log("in OnEnter" + this.param);
          this.foodService.listCar("Test");
      
    
    }
  
}
