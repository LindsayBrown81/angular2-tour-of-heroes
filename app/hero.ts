/*Part 5 of Heroes tutorial on https://angular.io/docs/ts/latest/tutorial/toh-pt5.html  Routing 
Action plan:

*/
export interface Hero { /*we refactored what was a string into the Hero interface which defined type Hero. Interfaces are light weight.Transpiling a class to JavaScript produces code.Transpiling an interface produces — nothing.*/
  id: number;
  name: string;
}
