/*Part 5 of Heroes tutorial on https://angular.io/docs/ts/latest/tutorial/toh-pt5.html  Routing 
  Action plan: ~I'm pasting all five points of our action plan here at the top of our new root component ts file. I'll paste a point at top of other files only if that file deals with that point.
  -turn AppComponent into an application shell that only handles navigation. Because our app has two views, default to one view until user chooses a view.
  -relocate the Heroes concerns within the ~original~ AppComponent to a separate HeroesComponent. We created this new AppComponent shell/file separately.
  -add routing
  -create a new DashboardComponent
  -tie the Dashboard into the navigation structure.
*/

/*This is our app's new root component file. Every Ang2 root component needs: 1) import statement 2) component decorator from Ang lib 3) AppComponent class declaration
This new AppComponent will be the application shell. It will have some navigation links at the top and a display area below for the pages we navigate to.
*/
import { Component }       from 'angular2/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
/* Creating new AppComponent in part5 of tutorial  Routing
1 - 3 see AppComponent class declaration beneath this Component decorator
4 add the @Component metadata decorator above the class with a my- app selector.
5 add a template with <h1> tags surrounding a binding to the title property.
6 add the <my-heroes> tags to the template so we still see the heroes.
7 add the HeroesComponent to the directives array so Angular recognizes the <my-heroes> tags.
8 add the HeroService to the providers array because we'll need it in every other view.
9 add the import statements above the Component decorator
*/
@Component({  /*Component is a decorator function that takes a metadata object, whose properties tell Ang how to create this component.*/
  selector: 'my-app',
  template:  /*rather than concatenating, utilize the template strings feature in ES2015 and TypeScript by changing quotes to backticks, then put each el on its own line as your template grows. template specifies the component's companion template, written in an enhanced form of HTML that tells Angular how to render this component's view.*/
  `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `,
  directives: [HeroesComponent], /*by adding the directives array property, we made the array item reusuable, thus we created our first reusable component! */
  providers: [  /* ---DONE in Services part of tutorial: We defined our HeroService as a provider for our AppComponent--- */
    HeroService /*The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent. The AppComponent can use that service to get heroes and so can every child component of its component tree.*/
  ]
})
/*Ang2 apps have at least 1 root component conventionally named AppComponent that hosts the client user experience.*/

/* Creating new AppComponent in part5 of tutorial  Routing
1 define an AppComponent class.
2 export it so we can reference it during bootstrapping in main.ts.
3 expose an application title property.
4 - 8 See the Component decorator above
*/
export class AppComponent {   /*A component class controls the appearance and behavior of a view through its template. We export AppComponent so that we can import it elsewhere in our application, as we'll see in main.ts*/
  title = 'Tour of Heroes'; /* ~~Does order of props matter? */
}
/* ~when you add properties to the class, add the associated {{data bindings}} in the component decorator's template. This is the interpolation form of 1 way data binding */

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/