import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { EmployeeComponent } from './employee/employee.component';
import { CarryforwardComponent } from './employee/carryforward/carryforward.component';
import { LeaveApplyComponent } from './employee/leave-apply/leave-apply.component';
import { LeaveStatisticComponent } from './employee/leave-statistic/leave-statistic.component';
import { ViewLeaveHistoryComponent } from './employee/view-leave-history/view-leave-history.component';
import { Sidebar1Component } from './employee/sidebar1/sidebar1.component';
import { CalenderComponent } from './calender/calender.component';
import { DepartmentComponent } from './admin/department/department.component';
import { RoleComponent } from './admin/role/role.component';
import { UserComponent } from './admin/user/user.component';
import { LeaveTypeComponent } from './admin/leave-type/leave-type.component';

import { FooterComponent } from './footer/footer.component';

import { PrivilageComponent } from './admin/privilage/privilage.component';
import { AdminCarryfowardComponent } from './admin/admin-carryfoward/admin-carryfoward.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { ViewLeaverequestComponent } from './admin/view-leaverequest/view-leaverequest.component';


// service imports

import { LeavetypeService } from './services/admin/leavetype.service';
import { DepartmentService } from './services/admin/department.service';
import {RoleService} from './services/admin/role.service';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    SidebarComponent,
    EmployeeComponent,
    CarryforwardComponent,
    LeaveApplyComponent,
    LeaveStatisticComponent,
    ViewLeaveHistoryComponent,

    Sidebar1Component,
    CalenderComponent,
    DepartmentComponent,
    RoleComponent,

    UserComponent,

    LeaveTypeComponent,
     FooterComponent,
    PrivilageComponent,

    AdminCarryfowardComponent,
    LoginComponent,

    ViewLeaverequestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LeavetypeService,
    DepartmentService,
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
