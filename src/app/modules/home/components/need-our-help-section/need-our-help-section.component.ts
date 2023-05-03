import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-need-our-help-section',
  templateUrl: './need-our-help-section.component.html',
  styleUrls: ['./need-our-help-section.component.scss']
})
export class NeedOurHelpSectionComponent implements OnInit {
  name!: string;
  number!: number;
  email!: string;
  description!: string;


  constructor() {

  }
  // myForm!: FormGroup;

  submitForm(form: NgForm) {
    // console.log('Name:', this.name);
    // console.log('Number:', this.number);
    // console.log('Email:', this.email);
    // console.log('Description:', this.description);
    console.log(form.value);
    
  }


  ngOnInit(): void {
    // this.myForm = this.FormBuilder.group({
    //   name: ['', Validators.required],
    //   number: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   description: ['', Validators.required]
    // });
  }

  // onSubmit() {
  //   console.log(this.myForm.value);
  // }
}


