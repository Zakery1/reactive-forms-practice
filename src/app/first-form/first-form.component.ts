import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-first-form',
	templateUrl: './first-form.component.html',
	styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

	name = new FormControl('');

	updateName() {
		this.name.setValue('Zak');
	}

	constructor() { }

	ngOnInit() {
	}

}
