/*Part 5 of Heroes tutorial on https://angular.io/docs/ts/latest/tutorial/toh-pt5.html  Routing 
Action plan: ~I'm pasting all five points of our action plan at the top of app.component.ts. I'll paste a point at top of other files only if that file deals with that point.
-turn AppComponent into an application shell that only handles navigation. Because our app has two views, default to one view until user chooses a view.
-relocate the Heroes concerns within the current AppComponent to a separate HeroesComponent. AppComponent is already dedicated to Heroes. Instead of moving anything out of AppComponent, we'll just rename it HeroesComponent and create a new AppComponent shell separately.
-add routing
-create a new DashboardComponent
-tie the Dashboard into the navigation structure.
*/

/*~~Does every Ang2 component need?: 1) import statement 2) component decorator from Ang lib 3) AppComponent class declaration*/

import {Component, OnInit} from 'angular2/core'; /*When we need something from a module, we import it. Here we import the Angular Component decorator function from the main Angular library module because we need it to define our component. ~We can also import from our app's modules*/
import {Router} from 'angular2/router';
import {Hero} from './hero';/* */
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';/*added during services part of tutorial in order to use HeroService*/


@Component({  /*Component is a decorator function that takes a metadata object, whose properties tell Ang how to create this component.*/
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  /*by adding the directives array property, we made the array item reusuable, thus we created our first reusable component! */
  directives: [HeroDetailComponent], /*the AppComponent creates an instance of HeroDetail by virtue of the <my-hero-detail> tag at the bottom of its template.That HeroDetail is a child of the AppComponent.*/
})  
/*Ang2 apps have at least 1 root component conventionally named AppComponent that hosts the client user experience.*/

/* ---DONE BELOW AND BELOW Services part of tutorial: We used the ngOnInit Lifecycle Hook to get our heroes when our AppComponent activates--- */
export class HeroesComponent implements OnInit {   /*A component class controls the appearance and behavior of a view through its template. We export AppComponent so that we can import it elsewhere in our application, as we'll see when we create main.ts*/
  /* ~~Does order of props matter? */
  heroes: Hero[];
  /*heroes = HEROES[];*/ /* create a public property in AppComponent that exposes the heroes for binding. Angular infers from the array HEROES that this property is of type Hero.
  /*We could have defined the heroes list here in this component class. But we know that ultimately we’ll get the heroes from a data service. Because we know where we are heading, it makes sense to separate the hero data from the class implementation from the start.*/
  selectedHero: Hero; /*we replaced the static hero prop with selectedHero prop. we won’t initialize the selectedHero as we were doing with hero, bc we're binding it to a click event (see template)*/
  /*Inject the HeroService with the constructor below. We are in Services part of the tutorial*/
  /*The AppComponent is the top level component of our application.There should be only one instance of that component and only one instance of the HeroService in our entire app.*/
  constructor(
    private _router: Router,
    private _heroService: HeroService) { } /*We prefix private variables with an underscore (_) to warn readers of our code that this variable is not part of the component's public API.*/

  getHeroes() {
  /*---DONE in hero.service.ts during Services part of tutorial: We designed our service to return a promise---*/
  /*---DONE BELOW Services part of the tutorial: And we designed our component to get our data from the promise---*/
  /*We pass our callback function as an argument to the promise's then method */
  this._heroService.getHeroes().then(heroes => this.heroes = heroes);/*was this.heroes = this._heroService.getHeroes(); .We had to change our implementation to act on the promise when it resolves. When the promise resolves successfully, then we will have heroes to display.*/
  }/*Our callback sets the component's heroes property to the array of heroes returned by the service. */
  
  /* ---DONE BELOW AND ABOVE Services part of tutorial: We used the ngOnInit Lifecycle Hook to get our heroes when our AppComponent activates--- */
  ngOnInit(){
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

}

/* ~when you add properties to the class, add the associated {{data bindings}} in the component decorator's template. This is the interpolation form of 1 way data binding */

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/