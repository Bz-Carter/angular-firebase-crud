import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/shared/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private studentApi: StudentService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.updateStudentData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.studentApi
      .GetStudent(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }

  get firstName() {
    return this.editForm.get('firstName');
  }
  get lastName() {
    return this.editForm.get('lastName');
  }
  get email() {
    return this.editForm.get('email');
  }
  get mobileNumber() {
    return this.editForm.get('mobileNumber');
  }
  updateStudentData() {
    this.editForm = this.fb.group({
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
  goBack() {
    this.location.back();
  }
  updateForm() {
    this.studentApi.UpdateStudent(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['firstName'].value + ' updated successfully'
    );
    this.router.navigate(['view-students']);
  }

}
