/*Part 5 of Heroes tutorial on https://angular.io/docs/ts/latest/tutorial/toh-pt5.html  Routing 
Action plan:

*/

/*Separation of concerns. we're keeping our data source separate from components which deal mostly with the view*/
import {Hero} from './hero';
/*---DONE BELOW Services part of tutorial: We created mock hero data with mock-heroes.ts and imported them into our service here---*/
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';/*Notice that we imported the Angular Injectable function and applied that function as an @Injectable() decorator.*/

/* ---DONE BELOW Services part of tutorial: We created a service class that can be shared by many components--- */
@Injectable()/*TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular may need to inject other dependencies into this service. */
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}

	// See the "Take it slow" appendix
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(() => resolve(HEROES), 2000) // 2 seconds
		);
	}

	getHero(id: number) {
		return Promise.resolve(HEROES).then(
			heroes => heroes.filter(hero => hero.id === id)[0]
		);
	}
}


