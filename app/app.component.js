/*Part 5 of Heroes tutorial on https://angular.io/docs/ts/latest/tutorial/toh-pt5.html  Routing
  Action plan: ~I'm pasting all five points of our action plan here at the top of our new root component ts file. I'll paste a point at top of other files only if that file deals with that point.
  -turn AppComponent into an application shell that only handles navigation. Because our app has two views, default to one view until user chooses a view.
  -relocate the Heroes concerns within the ~original~ AppComponent to a separate HeroesComponent. We created this new AppComponent shell/file separately.
  -add routing
  -create a new DashboardComponent
  -tie the Dashboard into the navigation structure.
*/
System.register(['angular2/core', './hero.service', './heroes.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1, heroes_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            }],
        execute: function() {
            /* Creating new AppComponent in part5 of tutorial  Routing
            1 - 3 see AppComponent class declaration beneath this Component decorator
            4 add the @Component metadata decorator above the class with a my- app selector.
            5 add a template with <h1> tags surrounding a binding to the title property.
            6 add the <my-heroes> tags to the template so we still see the heroes.
            7 add the HeroesComponent to the directives array so Angular recognizes the <my-heroes> tags.
            8 add the HeroService to the providers array because we'll need it in every other view.
            9 add the import statements above the Component decorator
            */
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes'; /* ~~Does order of props matter? */
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: /*rather than concatenating, utilize the template strings feature in ES2015 and TypeScript by changing quotes to backticks, then put each el on its own line as your template grows. template specifies the component's companion template, written in an enhanced form of HTML that tells Angular how to render this component's view.*/ "\n    <h1>{{title}}</h1>\n    <my-heroes></my-heroes>\n  ",
                        directives: [heroes_component_1.HeroesComponent],
                        providers: [
                            hero_service_1.HeroService /*The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent. The AppComponent can use that service to get heroes and so can every child component of its component tree.*/
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/* ~when you add properties to the class, add the associated {{data bindings}} in the component decorator's template. This is the interpolation form of 1 way data binding */
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map