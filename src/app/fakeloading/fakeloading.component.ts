import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fakeloading',
  templateUrl: './fakeloading.component.html',
  styleUrls: ['./fakeloading.component.css']
})
export class FakeloadingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => { this.router.navigate(['dashboard']);},3000);
  }

}
