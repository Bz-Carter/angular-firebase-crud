import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { Student } from 'src/app/shared/interfaces/student'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  p: number = 1;
  Student: Student[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  
  constructor(
    public studentApi: StudentService,
    public toastr: ToastrService
    ){ }
  
    ngOnInit() {
      this.dataState();
      let s = this.studentApi.GetStudentsList(); 
      s.snapshotChanges().subscribe(data => {
        this.Student = [];
        data.forEach(item => {
          let a = item.payload.toJSON(); 
          a['$key'] = item.key;
          this.Student.push(a as Student);
        })
      })
    }

    dataState() {     
      this.studentApi.GetStudentsList().valueChanges().subscribe(data => {
        this.preLoader = false;
        if(data.length <= 0){
          this.hideWhenNoStudent = false;
          this.noData = true;
        } else {
          this.hideWhenNoStudent = true;
          this.noData = false;
        }
      })
    }
    deleteStudent(student) {
      if (window.confirm('Are sure you want to delete this student ?')) { 
        this.studentApi.DeleteStudent(student.$key)
        this.toastr.success(student.firstName + ' successfully deleted!');
      }
    }

}
