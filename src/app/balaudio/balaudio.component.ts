import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { JouesonDirective } from '../joueson.directive';


@Component({
	selector: 'app-balaudio',
	templateUrl: './balaudio.component.html',
	styleUrls: ['./balaudio.component.css']
})
export class BalaudioComponent implements OnInit {
	@Input() user: Hero;
	nbfela = 0;
	constructor() {
	}

	ngOnInit() {
	}

	playSound(son){
		let audio = new Audio();
		audio.src = "../../assets/lp/" + son;
		audio.load();
		audio.play();
	}

	onClick(son) {
		if (son == 'painOuQuoi.mp3')
			this.nbfela++;
		if (this.nbfela == 10)
		{
			this.playSound('1up.mp3')
			this.nbfela = 0;
		}
		this.playSound(son);
	}
}