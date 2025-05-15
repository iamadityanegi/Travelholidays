import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TourPackage } from 'src/app/models/tour-package';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  form: FormGroup;
  // tour: any;
  @Input() tour?: TourPackage;

constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    name: [''],
    email: [''],
    message: ['']
  });
}

submitForm() {
  const data = {
    ...this.form.value,
    tour: this.tour
  };

  console.log('Sending this data to owner:', data);
  // TODO: send to backend
}


}
