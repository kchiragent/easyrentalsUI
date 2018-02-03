import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }      from './app.component';
import {DetailsComponent}       from './detailsview/details.component'

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

