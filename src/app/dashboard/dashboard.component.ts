import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private account:AccountsService) { }

  user = localStorage.getItem('UserId');

  logout(){
    this.account.doLogout();
  }

  ngOnInit(): void {
  }

}
