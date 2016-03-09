/*main.ts is the entry point of the app. We import two things we need to launch the application*/
import {bootstrap} from 'angular2/platform/browser'; /*no file extension needed. js configured as default in index.html*/
import {AppComponent} from './app.component';

bootstrap(AppComponent);	/*call bootstrap with AppComponent*/

/*
~App bootstrapping is a separate concern from presenting a view, so we separate bootstrapping from the root component in two different files
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/