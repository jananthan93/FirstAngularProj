import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Leavetype} from './../../models/admin/leavetype.model';
import { leaveView } from '@angular/core/src/render3/instructions';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LeavetypeService {

  constructor(private http:HttpClient) { }
  private leaveUrl = 'http://localhost:8080/hrm_system/leavetype';

      public getleavetypes(){
        return this.http.get<Leavetype[]>(this.leaveUrl);
      }

      public createLeave(leavetypeObj){
        return this.http.post<Leavetype>(this.leaveUrl,leavetypeObj);
      }

     public deleteLeave(lev){
        return this.http.delete<Leavetype>(this.leaveUrl + "/" + lev.id)
     }

     public updateLeave(leave)
     {
       return this.http.put<Leavetype>(this.leaveUrl + "/" + leave.id,leave)
     }
    
}