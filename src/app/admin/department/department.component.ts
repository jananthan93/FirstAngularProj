import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/admin/department.service';
import { Department } from 'src/app/models/admin/department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {


  constructor(private router: Router, private departmentService: DepartmentService) { }
  departments: Department[];
  depObj: Department = new Department();
  ngOnInit() {
    this.getDepartment()

  }
  getDepartment() {
    this.departmentService.getdepartments()
      .subscribe(data => {
        console.log(data);
        this.departments = data;
      })
  }
  createDepartment() {
    this.departmentService.addDepartment(this.depObj)
      .subscribe(data => {
        console.log(data);
        this.getDepartment();
      })
  }
  deleteDepartment() {
    this.departmentService.deleteDepartment(this.depObj)
      .subscribe(data => {
        console.log(data);
        this.getDepartment()
      })
  }
  deptDeleteId(dept){
      this.depObj=Object.assign({},dept);
      this.deleteDepartment()
      this.getDepartment();
    }
  updateDepartment() {
    this.departmentService.updateDepartment(this.depObj)
      .subscribe(data1 => {
        console.log(data1);
        this.getDepartment();
    
      });
  }
  depUpdateId(dep){
    this.depObj=Object.assign({},dep);
  }

  clear(){
    this.depObj.id=null;
    this.depObj.departmentName=null;
    
  }


}
