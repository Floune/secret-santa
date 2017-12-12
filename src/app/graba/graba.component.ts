import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graba',
  templateUrl: './graba.component.html',
  styleUrls: ['./graba.component.css']
})
export class GrabaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  zombo(ar) {
  	if (ar == 'zombo')
  		window.location.href='http://www.zombo.com';
  	else if (ar == 'qpc')
  		window.location.href='https://soundcloud.com/ronny-465200747';
  	else if (ar == 'orto')
  		window.location.href='https://www.youtube.com/watch?v=SEPMuyGe7dg';
  }

}
