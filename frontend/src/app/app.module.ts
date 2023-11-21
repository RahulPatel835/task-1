import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import {  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { PaginationComponent } from './pagination/pagination.component';
import { BlogComponent } from './blog/blog.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
  		PaginationComponent,
        BlogComponent,
        TeamsComponent      
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		AppRoutingModule,
		RouterModule,
		HttpClientModule,
		
	],exports:[],
	providers: [
	
		BlogComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
	bootstrap: [AppComponent],
	// entryComponents: [
	// 	DeleteCommentDialogBoxComponent
	// ]
})
export class AppModule { }
