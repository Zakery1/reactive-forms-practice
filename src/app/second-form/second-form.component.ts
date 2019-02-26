import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
	selector: 'app-second-form',
	templateUrl: './second-form.component.html',
	styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {

	profileForm = this.fb.group({
		firstName: ['', Validators.required],
		lastName: [''],
		address: this.fb.group({
			street: [''],
			city: [''],
			state: [''],
			zip: ['']
		}),
		aliases: this.fb.array([
			this.fb.control('')
		])
	});

	get aliases() {
		return this.profileForm.get('aliases') as FormArray;
	}

	addAlias() {
		this.aliases.push(this.fb.control(''));
	}

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

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
	}

}
