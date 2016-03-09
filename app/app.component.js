/*Every Ang2 root component needs: 1) import statement 2) component decorator from Ang lib 3) AppComponent class declaration*/
System.register(['angular2/core', './hero-detail.component', './hero.service'], function(exports_1, context_1) {
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
    var core_1, hero_detail_component_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                /*Inject the HeroService with the constructor below. We are in Services part of the tutorial*/
                /*The AppComponent is the top level component of our application.There should be only one instance of that component and only one instance of the HeroService in our entire app.*/
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes'; /* ~~Should I delete public from all 3 props? ~~Does order of props matter? */
                } /*We prefix private variables with an underscore (_) to warn readers of our code that this variable is not part of the component's public API.*/
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    /*---DONE IN hero.service.ts: Services part of tutorial: We designed our service to return a promise---*/
                    /*---DONE BELOW Services part of the tutorial: And we designed our component to get our data from the promise---*/
                    /*We pass our callback function as an argument to the promise's then method */
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; }); /*was this.heroes = this._heroService.getHeroes(); .We had to change our implementation to act on the promise when it resolves. When the promise resolves successfully, then we will have heroes to display.*/
                }; /*Our callback sets the component's heroes property to the array of heroes returned by the service. */
                /* ---DONE BELOW AND ABOVE Services part of tutorial: We used the ngOnInit Lifecycle Hook to get our heroes when our AppComponent activates--- */
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    /*added during services part of tutorial in order to use HeroService*/ core_1.Component({
                        selector: 'my-app',
                        template: /*rather than concatenating, utilize the template strings feature in ES2015 and TypeScript by changing quotes to backticks, then put each el on its own line as your template grows. template specifies the component's companion template, written in an enhanced form of HTML that tells Angular how to render this component's view.*/ 
                        /*double curly braces tell our app to read the title and hero properties from the component and render them. This is the "interpolation" form of one-way data binding.*/
                        /*We want the user to select a hero from our list, and have the selected hero appear in the details view.This UI pattern is widely known as "master-detail"*/
                        /*asterisks indicates that the li and its children constitute a master template. hash prefix identifies the hero as a local template variable. We can reference this variable within the template to access a hero’s properties*/
                        /*[class.selected]="hero === selectedHero" We’re saying “apply the selected class if the heroes match, remove it if they don’t”.*/
                        /*We connected the master to the detail through a selectedHero component property bound to a click event. We replaced the static hero property with selectedHero*/
                        "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2> \n    <ul class=\"heroes\">\n      <li *ngFor=\"#hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    ",
                        /*Notice in the template that the class.selected is surrounded in square brackets ([]). This is the syntax for a Property Binding, a binding in which data flows one way from the data source (the expression hero === selectedHero) to a property of class.  */
                        /*When we assign styles to a component they are scoped to that specific component. Our styles will only apply to our AppComponent and won't "leak" to the outer HTML.*/
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 10em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
                        /*by adding the directives array property, we made the array item reusuable, thus we created our first reusable component! */
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        /* ---DONE BELOW Services part of tutorial: We defined our HeroService as a provider for our AppComponent--- */
                        providers: [hero_service_1.HeroService] /*The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent. The AppComponent can use that service to get heroes and so can every child component of its component tree.*/
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/* ~when you add properties to the class, add the associated {{data bindings}} in the component decorator's template. This is the interpolation form of 1 way data binding */
/* PART 2 of Heroes Tutorial below deals with HEROES array
/* the HEROES array is of type Hero, the interface defined in part one, to create an array of heroes.*/
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map