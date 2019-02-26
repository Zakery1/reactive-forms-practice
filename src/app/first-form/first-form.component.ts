import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-first-form',
	templateUrl: './first-form.component.html',
	styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

	firstForm = new FormControl('');

	updateName() {
		this.firstForm.setValue('Zak');
	}

	constructor() { }

	ngOnInit() {
	}

}
