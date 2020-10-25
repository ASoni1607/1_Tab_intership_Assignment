import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private accountService:AccountsService,
    private router:Router,
    private http:HttpClient
  ) { }
  
  formError:any
  loginError:boolean

  loginForm=new FormGroup(
    {
      email: new FormControl('whardypiggin1@hatena.ne.jp', [Validators.required, Validators.email]),
      passwd: new FormControl('MbdgZ0K8Te',[Validators.required, Validators.minLength(8)])
    }
  );
  
  registerForm = new FormGroup({
    title:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwd: new FormControl('', [Validators.required,Validators.minLength(8)]),
    mobile: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    DOB: new FormControl('', [Validators.required]),
    occupation: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
  }

  loginFormSubmit(): void{
    if(this.loginForm.valid)
    {
      if(this.accountService.doLogin(this.loginForm.value)){
        this.router.navigate(['/userLogin'],this.loginForm.value);
        this.loginError = false;
      }
      else{
        this.loginError = true;
      }
    }
  }

  registerFormSubmit(): void{
    if (this.registerForm.valid) {
      this.accountService.doRegiser(this.loginForm.value);
      this.router.navigate(['/register'], this.registerForm.value);
    }
  }
}
