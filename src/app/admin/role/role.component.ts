import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/admin/role.service';
import { Role } from 'src/app/models/admin/role.model';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private router: Router, private roleService: RoleService) { }
  roles: Role[];
  roleObj: Role = new Role;

  ngOnInit() {
    this.getRoles();
  }

  getRoles(){
    this.roleService.getroles().subscribe(data => {
      console.log(data);
      this.roles=data;
    })
  }

  createRole(){
    this.roleService.addRole(this.roleObj).subscribe(data =>{
    this.getRoles();
    })
  }
  deleteRole() {
    this.roleService.deleteRole(this.roleObj)
      .subscribe(data => {
        console.log(data);
    this.getRoles()
      })
  }
  roleDeleteId(ro){
      this.roleObj=Object.assign({},ro);
     
      this.getRoles();
    }
  updateRole() {
    this.roleService.updateRole(this.roleObj)
      .subscribe(data1 => {
        console.log(data1);
        this.getRoles();
    
      });
  }
      roleUpdateId(rol){
        this.roleObj=Object.assign({},rol);
      }

      clear(){
        this.roleObj.id=null;
        this.roleObj.roleName=null;
        
      }

}

