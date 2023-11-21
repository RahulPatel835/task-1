import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes } from "@angular/router";
import {RouterModule} from '@angular/router';
import { BlogComponent } from "./blog/blog.component";
import { TeamsComponent } from "./teams/teams.component";

const routes: Routes = [

  {path:"",component:BlogComponent},
  {path:"home",component:BlogComponent},
  {path:"teams",component:TeamsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule,BrowserModule],
  exports: [RouterModule,FormsModule,ReactiveFormsModule,BrowserModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRoutingModule {}
