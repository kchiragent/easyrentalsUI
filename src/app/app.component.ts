import { Component } from '@angular/core';
import { FoodService } from './app.service';
import { foodList } from './model/food';


@Component({
  selector: 'app-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food Application';
  result: any[] ;
  errorMessage: any;
  
  constructor(public foodService: FoodService) {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("In the Constructor");
      
    };
    ngOnInit(){
        this.onEnter('');
    };
    
    onEnter(value:string){
    console.log("in OnEnter" + value);
          this.foodService.search(value).subscribe(result =>{
            this.result=result;
            console.log(result);
          }, 
          error => { 
             this.errorMessage = <any>error; 
          });
      
    
    }
    
    AddCar(value:string){
     console.log("in Addcar:" + value);
     this.foodService.listCar(value);
     this.onEnter('');
    }
  
}
