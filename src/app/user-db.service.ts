import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {UserModel} from './user-model';


@Injectable({
  providedIn: 'root'
})
export class UserDBService {
  private db:UserModel[] = new Array();
  
  constructor() {  }
  
  private getIndex(email:string):number{
    this.db.forEach((item,index)=>{
      if(item.email == email)
      {
        return index;
      }
    });

    return -1;

  }

  public adduser(data:UserModel){
    this.db.push(data);
  }

  public deluser(email: string) {
    delete this.db[this.getIndex(email)];
  }

  public updateUser(email:string,obj:any){
    if(this.getIndex(email) != -1 ){
      let index = this.getIndex(email);
      this.db[index].name = obj.name ? obj.name : this.db[index].name;
      this.db[index].occupation = obj.name ? obj.occupation : this.db[index].occupation;
      this.db[index].DOB = obj.name ? obj.DOB : this.db[index].DOB;
      this.db[index].title = obj.name ? obj.title : this.db[index].title;
    }
  }
  public updatepasswd(email: string,newpasswd:string){
    if(this.getIndex(email)!=-1){
      this.db[this.getIndex(email)].passwd=newpasswd;
    }
  }

  public verifyUser(obj:any):boolean{
    return false;
  }

  public listall(){
    this.db.forEach((item)=>{
      console.log(item);
    })
  }

}
