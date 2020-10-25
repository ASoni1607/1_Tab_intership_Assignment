import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDBService} from './user-db.service';
import { UserModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private userDB:UserDBService,
    private router:Router
    ) { }
  
  public isloggedIn():boolean{
    if(localStorage.getItem('UserId')){
      return true;
    }
    return false;
  }
  
  public doLogin(obj:any):boolean{
    if(this.userDB.verifyUser(obj)){
      localStorage.setItem('UserId', obj.email);
      return true;
    }
    return false;
  }

  public doRegiser(obj:UserModel){
    this.userDB.adduser(obj);
    this.doLogin(obj);
  }

  public doLogout(){
    localStorage.clear()
    this.router.navigate(['account']);
  }

}
