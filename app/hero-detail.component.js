/*Part 5 of Heroes tutorial on https://angular.io/docs/ts/latest/tutorial/toh-pt5.html  Routing
Action plan:

*/
System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*HeroDetailComponent is our app's first reusable component! ~as it's not the root component*/
            /*declare that hero is an input by adding an inputs array to the metadata. Another way could be use @Input() */
            HeroDetailComponent = (function () {
                function HeroDetailComponent() {
                }
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n\t  <div *ngIf=\"hero\">\n\t    <h2>{{hero.name}} details!</h2>\n\t    <div>\n\t    \t<label>id: </label>{{hero.id}}\n    \t</div>\n\t    <div>\n\t      <label>name: </label>\n\t      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n\t    </div>\n\t  </div>\n",
                        inputs: ['hero'] /*added in services part of tutorial. ~Does order of props matter? */
                    }), 
                    __metadata('design:paramtypes', [])
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