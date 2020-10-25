import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeloadingComponent } from './fakeloading/fakeloading.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'account', component: LoginComponent },
  { path: 'userLogin', component: FakeloadingComponent },
  { path: 'register', component: FakeloadingComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
