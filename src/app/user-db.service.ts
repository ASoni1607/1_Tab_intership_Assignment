import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {UserModel} from './user-model';


@Injectable({
  providedIn: 'root'
})
export class UserDBService {
  private db: UserModel[] = [{
    "_id": 1,
    "title": "Mr",
    "name": "Delphine Takkos",
    "email": "dtakkos0@state.gov",
    "passwd": "8DHMFbuRy",
    "mobile": "9037074115",
    "DOB": "24-Oct-1993",
    "occupation": "Dental Hygienist"
  }, {
    "_id": 2,
    "title": "Mr",
    "name": "Wynn Hardy-Piggin",
    "email": "whardypiggin1@hatena.ne.jp",
    "passwd": "MbdgZ0K8Te",
    "mobile": "9004278398",
    "DOB": "05-Oct-1992",
    "occupation": "Speech Pathologist"
  }, {
    "_id": 3,
    "title": "Honorable",
    "name": "Archibald Muress",
    "email": "amuress2@businessweek.com",
    "passwd": "flrwT1",
    "mobile": "6861272863",
    "DOB": "13-Aug-1992",
    "occupation": "Account Coordinator"
  }, {
    "_id": 4,
    "title": "Ms",
    "name": "Carita Macauley",
    "email": "cmacauley3@newsvine.com",
    "passwd": "mqJ0rNVwIe",
    "mobile": "9048305046",
    "DOB": "17-Jan-1995",
    "occupation": "Financial Advisor"
  }, {
    "_id": 5,
    "title": "Rev",
    "name": "Lothario Luckcuck",
    "email": "lluckcuck4@wikimedia.org",
    "passwd": "C4NpLcAsA1",
    "mobile": "3445850053",
    "DOB": "17-Jan-1993",
    "occupation": "Systems Administrator IV"
  }, {
    "_id": 6,
    "title": "Rev",
    "name": "Trescha Thirkettle",
    "email": "tthirkettle5@weibo.com",
    "passwd": "n5hpDLf6sD",
    "mobile": "4219777834",
    "DOB": "24-Jan-1995",
    "occupation": "Structural Engineer"
  }, {
    "_id": 7,
    "title": "Rev",
    "name": "Nessa Barz",
    "email": "nbarz6@scientificamerican.com",
    "passwd": "2qIDPxxpYZn6",
    "mobile": "1352553254",
    "DOB": "30-Oct-1997",
    "occupation": "Legal Assistant"
  }, {
    "_id": 8,
    "title": "Honorable",
    "name": "Chloe Gailor",
    "email": "cgailor7@tripadvisor.com",
    "passwd": "k3qEngwz",
    "mobile": "4589776181",
    "DOB": "08-Jan-1998",
    "occupation": "Civil Engineer"
  }, {
    "_id": 9,
    "title": "Dr",
    "name": "Alick Purdy",
    "email": "apurdy8@yahoo.com",
    "passwd": "T1AQDdFdHxq",
    "mobile": "7911486166",
    "DOB": "13-May-1995",
    "occupation": "Sales Associate"
  }, {
    "_id": 10,
    "title": "Honorable",
    "name": "Neville Fullard",
    "email": "nfullard9@ucoz.com",
    "passwd": "4rZF6uw",
    "mobile": "4628408548",
    "DOB": "20-May-1998",
    "occupation": "Teacher"
  }];
  
  constructor() {  }
  
  private getIndex(email:string):number{
    let sel:number = -1;
    this.db.forEach((item,index)=>{
      if(item.email == email)
      {
        sel = index;
      }
    });

    return sel;
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
    if(this.getIndex(obj.email) != -1){
      if(this.db[this.getIndex(obj.email)].passwd == obj.passwd){
        return true;
      }
    }
    else{
      return false;
    }
  }

  public listall(){
    this.db.forEach((item,index)=>{
      console.log(item);
    })
  }

}
