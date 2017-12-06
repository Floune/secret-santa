import { Directive, ElementRef, Renderer2, ViewChild, OnInit, Input, HostListener } from '@angular/core';

@Directive({
	selector: '[appJoueson]'
})
export class JouesonDirective {
	@ViewChild('odio') 
	private odio: ElementRef;

	@Input() appJoueson: string
	constructor(private renderer: Renderer2,
		private el: ElementRef) { }

	@HostListener('click') onClick() {

	}

}

