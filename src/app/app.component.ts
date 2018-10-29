import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LeaveSystemUI';
  isLoggedIn:boolean=false;
  islogIn:boolean=false;
  userName:string;
  password:string;

  userRole:string;

  login(){
    if(this.userName=="admin"&& this.password!=""){
      this.userRole="admin";
      this.isLoggedIn=true;
  
   }  else if(this.userName=="emp"&& this.password!=""){
        this.userRole="emp";
       
        this.isLoggedIn=true;
      }
    }
}
