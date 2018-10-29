import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Department } from 'src/app/models/admin/department.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class DepartmentService {

  constructor(private http:HttpClient) { }
  private deptUrl='http://localhost:8080/hrm_system/department';

  public getdepartments(){
    return this.http.get<Department[]>(this.deptUrl);
  }

  public addDepartment(depObj){
    return this.http.post<Department>(this.deptUrl,depObj);
  }

  public deleteDepartment(dep){
    return this.http.delete<Department>(this.deptUrl + "/" + dep.id);
  }
  
  public updateDepartment(updep){
    return this.http.put<Department>(this.deptUrl + "/" + updep.id,updep);
  }

}
