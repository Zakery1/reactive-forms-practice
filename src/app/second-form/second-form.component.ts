import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-second-form',
	templateUrl: './second-form.component.html',
	styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {

	profileForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		address: new FormGroup({
			street: new FormControl(''),
			city: new FormControl(''),
			state: new FormControl(''),
			zip: new FormControl('')
		})
	});

	updateProfile() {
		this.profileForm.patchValue({
			firstName: 'Zak',
			address: {
				street: '123 e beacon lane'
			}
		});
	}

	onSubmit() {
		console.warn(this.profileForm.value);
	}

	constructor() { }

	ngOnInit() {
	}

}
