import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UserDBService } from '../user-db.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() newData:boolean; // true for add , false for edit
  @Input() updateData:UserModel;
  @Output() closeStatus = new EventEmitter<boolean>();

  
  constructor(private userDB:UserDBService) { }

  formError;

  registerForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, this.emailValidaton()]),
    passwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
    mobile: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999), this.MobileValidaton()]),
    DOB: new FormControl('', [Validators.required]),
    occupation: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    if(!this.newData){
      this.registerForm.controls.title.setValue(this.updateData.title);
      this.registerForm.controls.name.setValue(this.updateData.name);
      this.registerForm.controls.email.setValue(this.updateData.email);
      this.registerForm.controls.email.disable();
      this.registerForm.controls.passwd.setValue(this.updateData.passwd);
      this.registerForm.controls.mobile.setValue(this.updateData.mobile);
      this.registerForm.controls.mobile.disable();
      this.registerForm.controls.DOB.setValue(this.updateData.DOB);
      this.registerForm.controls.occupation.setValue(this.updateData.occupation);
    }
  }

  emailValidaton(): ValidatorFn {
    return (control: AbstractControl): any => {
      let forbidden = this.userDB.checkEmail(control.value);
      return forbidden ? { forbiddenEmail: true } : null;
    };
  }

  MobileValidaton(): ValidatorFn {
    return (control: AbstractControl): any => {
      let forbidden = this.userDB.checkMobile(control.value);
      return forbidden ? { forbiddenMobile: true } : null;
    };
  }

  close(){
    this.closeStatus.emit(false);
  }

  registerFormSubmit(): void {
    if (this.registerForm.valid) {
      if(this.newData)
      {
        this.userDB.adduser(this.registerForm.value);
        this.close();
      }
      else{
        this.userDB.updateUser(this.registerForm.value.email,this.registerForm.value)
        this.close();
      }
    }
  }

}
