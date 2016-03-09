/*Every Ang2 root component needs: 1) import statement 2) component decorator from Ang lib 3) AppComponent class declaration*/

import {Component, OnInit} from 'angular2/core'; /*When we need something from a module, we import it. Here we import the Angular Component decorator function from the main Angular library module because we need it to define our component. ~We can also import from our app's modules*/
import {Hero} from './hero';/* */
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';/*added during services part of tutorial in order to use HeroService*/


@Component({  /*Component is a decorator function that takes a metadata object, whose properties tell Ang how to create this component.*/
  selector: 'my-app',
  template:  /*rather than concatenating, utilize the template strings feature in ES2015 and TypeScript by changing quotes to backticks, then put each el on its own line as your template grows. template specifies the component's companion template, written in an enhanced form of HTML that tells Angular how to render this component's view.*/
    /*double curly braces tell our app to read the title and hero properties from the component and render them. This is the "interpolation" form of one-way data binding.*/
    /*We want the user to select a hero from our list, and have the selected hero appear in the details view.This UI pattern is widely known as "master-detail"*/
    /*asterisks indicates that the li and its children constitute a master template. hash prefix identifies the hero as a local template variable. We can reference this variable within the template to access a hero’s properties*/
     /*[class.selected]="hero === selectedHero" We’re saying “apply the selected class if the heroes match, remove it if they don’t”.*/
     /*We connected the master to the detail through a selectedHero component property bound to a click event. We replaced the static hero property with selectedHero*/
    `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2> 
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    /*Notice in the template that the class.selected is surrounded in square brackets ([]). This is the syntax for a Property Binding, a binding in which data flows one way from the data source (the expression hero === selectedHero) to a property of class.  */
  /*When we assign styles to a component they are scoped to that specific component. Our styles will only apply to our AppComponent and won't "leak" to the outer HTML.*/
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  /*by adding the directives array property, we made the array item reusuable, thus we created our first reusable component! */
  directives: [HeroDetailComponent], /*the AppComponent creates an instance of HeroDetail by virtue of the <my-hero-detail> tag at the bottom of its template.That HeroDetail is a child of the AppComponent.*/
    
  /* ---DONE BELOW Services part of tutorial: We defined our HeroService as a provider for our AppComponent--- */
  providers: [HeroService] /*The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent. The AppComponent can use that service to get heroes and so can every child component of its component tree.*/
})  

/*Ang2 apps have at least 1 root component conventionally named AppComponent that hosts the client user experience.*/

/* ---DONE BELOW AND BELOW Services part of tutorial: We used the ngOnInit Lifecycle Hook to get our heroes when our AppComponent activates--- */
export class AppComponent implements OnInit {   /*A component class controls the appearance and behavior of a view through its template. We export AppComponent so that we can import it elsewhere in our application, as we'll see when we create main.ts*/
  title = 'Tour of Heroes'; /* ~~Should I delete public from all 3 props? ~~Does order of props matter? */
  // hero: Hero;
  // public hero: Hero = { using type Hero, we define an object. ~This type Hero is a lil like a prototype object~. We initialize type Hero obj with two props w set vals 
  //   id: 1,
  //   name: 'Windstorm'
  // };
  heroes: Hero[];
  /*heroes = HEROES[];*/ /* create a public property in AppComponent that exposes the heroes for binding. Angular infers from the array HEROES that this property is of type Hero.
  /*We could have defined the heroes list here in this component class. But we know that ultimately we’ll get the heroes from a data service. Because we know where we are heading, it makes sense to separate the hero data from the class implementation from the start.*/
  selectedHero: Hero; /*we replaced the static hero prop with selectedHero prop. we won’t initialize the selectedHero as we were doing with hero, bc we're binding it to a click event (see template)*/
  /*Inject the HeroService with the constructor below. We are in Services part of the tutorial*/
  /*The AppComponent is the top level component of our application.There should be only one instance of that component and only one instance of the HeroService in our entire app.*/
  constructor(private _heroService: HeroService) { } /*We prefix private variables with an underscore (_) to warn readers of our code that this variable is not part of the component's public API.*/

  getHeroes() {
  
  /*---DONE IN hero.service.ts: Services part of tutorial: We designed our service to return a promise---*/
  /*---DONE BELOW Services part of the tutorial: And we designed our component to get our data from the promise---*/
  /*We pass our callback function as an argument to the promise's then method */
  this._heroService.getHeroes().then(heroes => this.heroes = heroes);/*was this.heroes = this._heroService.getHeroes(); .We had to change our implementation to act on the promise when it resolves. When the promise resolves successfully, then we will have heroes to display.*/
  }/*Our callback sets the component's heroes property to the array of heroes returned by the service. */
  
  /* ---DONE BELOW AND ABOVE Services part of tutorial: We used the ngOnInit Lifecycle Hook to get our heroes when our AppComponent activates--- */
  ngOnInit(){
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

}
/* ~when you add properties to the class, add the associated {{data bindings}} in the component decorator's template. This is the interpolation form of 1 way data binding */
/* PART 2 of Heroes Tutorial below deals with HEROES array
/* the HEROES array is of type Hero, the interface defined in part one, to create an array of heroes.*/



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/