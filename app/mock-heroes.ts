/*Part 5 of Heroes tutorial on https://angular.io/docs/ts/latest/tutorial/toh-pt5.html  Routing 
Action plan:

*/

/*---DONE IN THIS FILE Services part of tutorial: We created mock hero data and...in different file, imported them into our service---*/
import {Hero} from './hero';/* we copied over import {Hero}... statement bc the heroes array uses the Hero interface. */

export var HEROES: Hero[] = [ /* We export the HEROES constant so we can import it elsewhere — such as our HeroService */
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
