import { Component, OnInit } from 'angular2/core';/*We need OnInit interface because we'll initialize the heroes in the ngOnInit method as we've done before.*/
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';/*We need the Hero and HeroService *symbols* in order to reference those types.*/


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',/*We specify the path all the way back to the application root. Angular doesn't support module-relative paths.*/

})
/*Implement the DashboardComponent class*/
export class DashboardComponent implements OnInit {
	
	heroes: Hero[] = [];/*create a heroes array property*/
	
	/*inject the HeroService in the constructor and hold it in a private _heroService field.*/
	constructor(
		private _router: Router,
		private _heroService: HeroService) {
	}

	ngOnInit() {
		this._heroService.getHeroes() /*call the service to get heroes inside the Angular ngOnInit lifecycle hook*/
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}
	
	gotoDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this._router.navigate(link);
	}

}

/*The gotoDetail method navigates in two steps:
set a route link parameters array
pass the array to the router's navigate method.*/