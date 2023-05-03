import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-need-our-help-section',
  templateUrl: './need-our-help-section.component.html',
  styleUrls: ['./need-our-help-section.component.scss']
})
export class NeedOurHelpSectionComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
