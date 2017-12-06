import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';  

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'login',component: LoginComponent}
]; 

@NgModule({
	exports: [ RouterModule ],
	imports: [
		HttpModule,
		RouterModule.forRoot(routes),
		CommonModule
	],
	declarations: []
})
export class AppRoutingModule { }
