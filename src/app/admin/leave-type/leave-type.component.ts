import { Component, OnInit } from '@angular/core';
import { LeavetypeService } from 'src/app/services/admin/leavetype.service';
import { Router } from '@angular/router';
import { Leavetype } from 'src/app/models/admin/leavetype.model';

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit {

  constructor(private router:Router,private leavetypeService:LeavetypeService) { }

  leavetypeObj: Leavetype = new Leavetype();
  leavetypes:Leavetype[];


  ngOnInit() {
    this.getLeaveType();
  }

  createLeave(){
    this.leavetypeService.createLeave(this.leavetypeObj)
    .subscribe(data=>{console.log(data);
      this.getLeaveType();
    })
  }

  getLeaveType(){
  this.leavetypeService.getleavetypes()
    .subscribe(data => {console.log(data);
      this.leavetypes = data;
    })
  }

  getDeleteById(levtype){
    this.leavetypeObj= Object.assign({},levtype)
  }
  deleteLeaveType(){
    this.leavetypeService.deleteLeave(this.leavetypeObj).subscribe(data =>{
      console.log(data);
      this.getLeaveType();
    })
  }
  getUpdateById(lev){
    this.leavetypeObj=Object.assign({},lev)
  }
  updateLeaveType(){
    this.leavetypeService.updateLeave(this.leavetypeObj).subscribe(data =>{
      console.log(data);

      this.getLeaveType();
    })
  }
  clear(){
    this.leavetypeObj.id=null;
    this.leavetypeObj.leaveType=null;
    this.leavetypeObj.allocationDays=null;
  }
}
