import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-section',
  templateUrl: './contact-us-section.component.html',
  styleUrls: ['./contact-us-section.component.scss'],
})
export class ContactUsSectionComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      nameSurname: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onClick() {
    console.log(this.myForm.value);
  }
}
