import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Role } from 'src/app/models/admin/role.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http:HttpClient) { }
  private roleUrl='http://localhost:8080/hrm_system/role';

  public getroles(){
    return this.http.get<Role[]>(this.roleUrl)
  }

  public addRole(roleobj){
    return this.http.post<Role>(this.roleUrl,roleobj)
  }

  public deleteRole(role){
    return this.http.delete<Role>(this.roleUrl+"/"+ role.id )
  }

  public updateRole(uprol){
    return this.http.put<Role>(this.roleUrl + "/" + uprol.id,uprol)
  }
}
