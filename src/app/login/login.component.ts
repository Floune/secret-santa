import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../list';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	// Define a users property to hold our user data
	userr;
	roueHide = false;
	name: string;
	users: Array<any>;
	hide = true;
	hideList = false;
	checkSame = false;
	checkDoneur = false;
	checkReceveur = false;
	errMess = '';
	private sub: any;
	grab = 0;

	// Create an instance of the DataService through dependency injection
	constructor(private _dataService: DataService,
		private route: ActivatedRoute,
		private router: Router) {

	    // Access the Data Service's getUsers() method we defined
	    this._dataService.getUsers()
	    .subscribe(res => this.users = res);
	    
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.name = params['name'];
		});
	}

	playAudio(){
		this.grab += 1;
		if (this.grab >= 5)
		{
			this.grab = 0;
			this.router.navigate(['/graba']);
		}
		let audio = new Audio();
		audio.src = "../assets/pet.wav";
		audio.load();
		audio.play();
	}


	setUser(){
		this.roueHide = true;

		this.users.forEach(val => {
			if (val.name == this.name)
				this.userr = val;
		});
	}

	onRandom() {
		this.errMess = '';
		if ((this.userr.name =='helow'))
		{
			while (this.checkSame == false) 
			{
				var rand = this.users[Math.floor(Math.random() * ((this.users.length) - 2))];
				if (rand.id != this.userr.id)
					this.checkSame = true;
			}	
		}
		else 
		{
			//vérifie qu'on ne s'appelle pas soi-même
			while (this.checkSame == false) 
			{
				var rand = this.users[Math.floor(Math.random() * this.users.length)];
				if (rand.id != this.userr.id)
					this.checkSame = true;
			}
		}
		
		//Vérifier si !donneur.match et !receveur.ss
		if ((!(this.userr.match) && !(rand.ss)))
		{
			if (this.userr.name != rand.match)
			{	
					//actualisation affichage
					this.userr.match = rand.name;
					rand.ss = this.userr.name;
					this._dataService.match(this.userr.id, rand.id, rand.name, this.userr.name)
					.subscribe(res => this.users = res);
				}
			}
			else 
			{
				this.checkSame = false;
				this.errMess = rand.name + " déja pris(e), réessaie";
			}
		}
	}

