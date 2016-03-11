System.register(['angular2/core', 'angular2/router', './hero.service'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_service_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            /*HeroDetailComponent is our app's first reusable component! ~as it's not the root component*/
            /*declare that hero is an input by adding an inputs array to the metadata. Another way could be use @Input() */
            HeroDetailComponent = (function () {
                /*We inject the both the RouteParams service and the HeroService into the constructor as we've done before, making private variables for both:*/
                function HeroDetailComponent(_heroService, _routeParams) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                } /*No commas between functions*/
                /*Inside the ngOnInit lifecycle hook, extract the id parameter value from the RouteParams service and use the HeroService to fetch the hero with that id.*/
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id'); /*Notice how we extract the id by calling the RouteParams.get method. The hero id is a number. Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.*/
                    this._heroService.getHero(id)
                        .then(function (hero) { return _this.hero = hero; });
                };
                HeroDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        templateUrl: 'app/hero-detail.component.html',
                        inputs: ['hero'] /*added in services part of tutorial. ~Does order of props matter? */
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
/*When there is no selectedHero ~bc user hasn't selected yet~, wrap that content in a div w the ngIf directive.
it removes the hero detail HTML from the DOM. When the user picks a hero, selectedHero becomes "truthy" and ngIf
puts the hero detail content into the DOM and evaluates the nested bindings.*/ 
//# sourceMappingURL=hero-detail.component.js.map