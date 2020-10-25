import { Injectable } from '@angular/core';
import { UserDBService} from './user-db.service';
import { UserModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private userDB:UserDBService) { }
  
  public isloggedIn():boolean{
    if(localStorage.getItem('UserId')){
      return true;
    }
    return false;
  }
  
  public doLogin(obj:any){
    console.log(this.userDB.verifyUser(obj));
  }

  public doRegiser(obj:UserModel){
    this.userDB.adduser(obj);
    this.doLogin(obj);
    this.userDB.listall();
  }

  public doLogout(){
    localStorage.setItem('UserId',undefined);
  }

}
