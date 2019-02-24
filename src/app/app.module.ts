import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FirstFormComponent } from './first-form/first-form.component';


@NgModule({
	declarations: [
		AppComponent,
		FirstFormComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
