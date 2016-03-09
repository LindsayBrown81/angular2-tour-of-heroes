import {Component} from 'angular2/core';
import {Hero} from './hero';
/*HeroDetailComponent is our app's first reusable component! ~as it's not the root component*/
/*declare that hero is an input by adding an inputs array to the metadata. Another way could be use @Input() */
@Component({
	selector: 'my-hero-detail',
	template: `
	  <div *ngIf="hero">
	    <h2>{{hero.name}} details!</h2>
	    <div>
	    	<label>id: </label>{{hero.id}}
    	</div>
	    <div>
	      <label>name: </label>
	      <input [(ngModel)]="hero.name" placeholder="name"/>
	    </div>
	  </div>
`,
	inputs: ['hero']/*added in services part of tutorial. ~Does order of props matter? */
})
export class HeroDetailComponent {
	hero: Hero;
}
/*When there is no selectedHero ~bc user hasn't selected yet~, wrap that content in a div w the ngIf directive. 
it removes the hero detail HTML from the DOM. When the user picks a hero, selectedHero becomes "truthy" and ngIf 
puts the hero detail content into the DOM and evaluates the nested bindings.*/