import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './admin/department/department.component';
import { RoleComponent } from './admin/role/role.component';
import { UserComponent } from './admin/user/user.component';
import { LeaveTypeComponent } from './admin/leave-type/leave-type.component';
import { AdminCarryfowardComponent } from './admin/admin-carryfoward/admin-carryfoward.component';
import { ViewLeaverequestComponent } from './admin/view-leaverequest/view-leaverequest.component';


const routes: Routes = [

  { path: 'employee', component: EmployeeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'role', component: RoleComponent },
  { path: 'user', component: UserComponent },
  { path: 'carryforward', component: AdminCarryfowardComponent },
  { path: 'leaverequest', component: ViewLeaverequestComponent },
  { path: 'leavetype', component: LeaveTypeComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})  
export class AppRoutingModule { }
