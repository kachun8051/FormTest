import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;

  studentIdValidator(control: FormControl): { [s: string]: boolean } | null
  {
    if (!control.value.match(/^21/)) {
      return {not21: true};
    } else {
      return null;
    }
  }

  constructor(fb: FormBuilder) {
    /*
    this.studentForm = fb.group(
      {
        'studentId': ['21123456', Validators.required],
        'studentName': ['Peter', Validators.required],
        'studentEmail': ['peter@abc.com', Validators.required]
      }
    );
    */
    this.studentForm = fb.group({
      'studentId': ['', Validators.compose(
        [Validators.required, this.studentIdValidator]
      )]
    });
   }

  onSubmit(formValue: any): void {
    console.log('you submitted value: ', formValue);
  }

  ngOnInit(): void {
  }
}
