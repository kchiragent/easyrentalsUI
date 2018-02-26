import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FoodService } from './app.service';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { DetailsComponent } from './detailsview/details.component';
import { ListCar } from './ListCar/ListCar';

import { AppRoutingModule } from './/app-routing.module';

const routes: Routes = [
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'list/', component: ListCar },
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,ListCar
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FoodService],
  bootstrap: [HomeComponent]
})



export class AppModule { }
