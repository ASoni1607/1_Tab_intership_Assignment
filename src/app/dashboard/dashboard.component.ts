import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../accounts.service';
import { UserDBService } from '../user-db.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private account:AccountsService, private db:UserDBService, private router:Router) { }

  user = localStorage.getItem('UserId');
  DBlist:UserModel[] = this.db.getalldb();

  editUserForm = false
  addUser:boolean 
  currentData:UserModel;

  logout(){
    this.account.doLogout();
  }

  ngOnInit(): void {
    if(!localStorage.getItem('UserId')){
      this.router.navigate(['account']);
    }
  }

  close(status:boolean)
  {
    this.editUserForm=false;
  }

  add(){
    this.editUserForm = true;
    this.addUser = true;
  }

  del(email:string){
    if(localStorage.getItem('UserId') == email){
      this.db.deluser(email)
      this.logout();
    }
    else{
      this.db.deluser(email)
    }
    
  }

  edit(d:UserModel){
    this.editUserForm = true;
    this.addUser =false;
    this.currentData=d;
  }

}
