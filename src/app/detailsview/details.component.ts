import { Component } from '@angular/core';
import { FoodService } from '../app.service';
import {foodList} from '../model/food';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  title = 'Details';
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
    /*
          this.foodService.report(this.param).subscribe(result =>{
            this.result=result;
            console.log(result);
          }, 
          error => { 
             this.errorMessage = <any>error; 
          });
      */
    
    }
  
}
