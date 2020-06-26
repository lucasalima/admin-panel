import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Interfaces
import { FormInputOutput } from '../models/form-input-output';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input('label') label: string;
  @Input('type') type: 'text' | 'email' = 'text';
  @Input('placeholder') placeholder: string;
  @Input('value') value: string | number;
  @Input('fieldName') fieldName: string;
  @Input('required') required: boolean = false;
  @Input('clearField') clearField: boolean = true;

  @Output('valueChanged') valueChanged: EventEmitter<
    FormInputOutput
  > = new EventEmitter();

  inputControl: FormControl = new FormControl(null, []);

  constructor() {}

  ngOnInit() {
    this.setValidators();
  }

  setValidators(): void {
    this.inputControl.setValue(this.value);

    if (this.type === 'email') {
      this.inputControl.setValidators([Validators.email]);
    }

    if (this.required) {
      this.inputControl.setValidators([Validators.required]);
    }

    this.inputControl.updateValueAndValidity();
  }

  onValueChanged(): void {
    this.valueChanged.emit({
      fieldName: this.fieldName,
      value: this.inputControl.value,
    });
  }

  onClearInput(): void {
    this.inputControl.setValue(null);

    this.onValueChanged();
  }
}
