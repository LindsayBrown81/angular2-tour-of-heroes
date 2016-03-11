/*Part 5 of Heroes tutorial on https://angular.io/docs/ts/latest/tutorial/toh-pt5.html  Routing
Action plan: ~I'm pasting all five points of our action plan at the top of app.component.ts. I'll paste a point at top of other files only if that file deals with that point.
-turn AppComponent into an application shell that only handles navigation. Because our app has two views, default to one view until user chooses a view.
-relocate the Heroes concerns within the current AppComponent to a separate HeroesComponent. AppComponent is already dedicated to Heroes. Instead of moving anything out of AppComponent, we'll just rename it HeroesComponent and create a new AppComponent shell separately.
-add routing
-create a new DashboardComponent
-tie the Dashboard into the navigation structure.
*/
System.register(['angular2/core', 'angular2/router', './hero-detail.component', './hero.service'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_detail_component_1, hero_service_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                /*Inject the HeroService with the constructor below. We are in Services part of the tutorial*/
                /*The AppComponent is the top level component of our application.There should be only one instance of that component and only one instance of the HeroService in our entire app.*/
                function HeroesComponent(_router, _heroService) {
                    this._router = _router;
                    this._heroService = _heroService;
                } /*We prefix private variables with an underscore (_) to warn readers of our code that this variable is not part of the component's public API.*/
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    /*---DONE in hero.service.ts during Services part of tutorial: We designed our service to return a promise---*/
                    /*---DONE BELOW Services part of the tutorial: And we designed our component to get our data from the promise---*/
                    /*We pass our callback function as an argument to the promise's then method */
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; }); /*was this.heroes = this._heroService.getHeroes(); .We had to change our implementation to act on the promise when it resolves. When the promise resolves successfully, then we will have heroes to display.*/
                }; /*Our callback sets the component's heroes property to the array of heroes returned by the service. */
                /* ---DONE BELOW AND ABOVE Services part of tutorial: We used the ngOnInit Lifecycle Hook to get our heroes when our AppComponent activates--- */
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                HeroesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                HeroesComponent = __decorate([
                    /*added during services part of tutorial in order to use HeroService*/ core_1.Component({
                        selector: 'my-heroes',
                        templateUrl: 'app/heroes.component.html',
                        styleUrls: ['app/heroes.component.css'],
                        /*by adding the directives array property, we made the array item reusuable, thus we created our first reusable component! */
                        directives: [hero_detail_component_1.HeroDetailComponent],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
/* ~when you add properties to the class, add the associated {{data bindings}} in the component decorator's template. This is the interpolation form of 1 way data binding */
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=heroes.component.js.map