import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Import the DataService
import { DataService } from '../data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
		userr;
		users: Array<any>;
		ermes: string;
		selectedUser;

	  // Create an instance of the DataService through dependency injection
	  constructor(private _dataService: DataService,
	  	private router: Router) {
	    // Access the Data Service's getUsers() method we defined
	    this._dataService.getUsers()
	    .subscribe(res => this.users = res);
		}

	checkLog(name, pw){
		this.ermes = '';
		this.users.forEach(user =>{
			if(name == user.name && pw == user.pw){
				this.userr = user;
				this.router.navigate(['/login', {'name': this.userr.name}]);
			}
			else if (pw == user.pw && name != user.name)
				this.ermes = 'Login incorrect';
			
			else if (name == user.name && pw != user.pw)
				this.ermes = 'Mot de passe incorrect';
		});
	}

}
