import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-need-our-help-section',
  templateUrl: './need-our-help-section.component.html',
  styleUrls: ['./need-our-help-section.component.scss']
})
export class NeedOurHelpSectionComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      message: ['', Validators.required]
    });
  }
  
  onClick(formGroup:FormGroup) {
    console.log(this.myForm.value);
  }
}


