/*Part 5 of Heroes tutorial on https://angular.io/docs/ts/latest/tutorial/toh-pt5.html  Routing 
Action plan:
*/
import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

/*HeroDetailComponent is our app's first reusable component! ~as it's not the root component*/
/*declare that hero is an input by adding an inputs array to the metadata. Another way could be use @Input() */
@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html',
	inputs: ['hero']/*added in services part of tutorial. ~Does order of props matter? */
})

export class HeroDetailComponent implements OnInit {
	hero: Hero;
	/*We inject the both the RouteParams service and the HeroService into the constructor as we've done before, making private variables for both:*/
	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	} /*No commas between functions*/
	/*Inside the ngOnInit lifecycle hook, extract the id parameter value from the RouteParams service and use the HeroService to fetch the hero with that id.*/
	ngOnInit() {
		let id = +this._routeParams.get('id'); /*Notice how we extract the id by calling the RouteParams.get method. The hero id is a number. Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.*/
		this._heroService.getHero(id)
			.then(hero => this.hero = hero);
	}

	goBack() {
		window.history.back();
	}
}
/*When there is no selectedHero ~bc user hasn't selected yet~, wrap that content in a div w the ngIf directive. 
it removes the hero detail HTML from the DOM. When the user picks a hero, selectedHero becomes "truthy" and ngIf 
puts the hero detail content into the DOM and evaluates the nested bindings.*/