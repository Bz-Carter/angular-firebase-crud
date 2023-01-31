import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public studentForm: FormGroup;

  constructor(
    public studentApi: StudentService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    this.studentApi.GetStudentsList();
    this.studenForm();
  }

  studenForm() {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  get firstName() {
    return this.studentForm.get('firstName');
  }
  get lastName() {
    return this.studentForm.get('lastName');
  }
  get email() {
    return this.studentForm.get('email');
  }
  get mobileNumber() {
    return this.studentForm.get('mobileNumber');
  }
  ResetForm() {
    this.studentForm.reset();
  }
  submitStudentData() {
    this.studentApi.AddStudent(this.studentForm.value);
    this.toastr.success(
      this.studentForm.controls['firstName'].value + ' successfully added!'
    );
    this.ResetForm();
  }

}
