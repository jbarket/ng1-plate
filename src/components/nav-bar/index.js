import angular from 'angular';
import controller from './nav-bar';
import template from './nav-bar.html';

let navBar = angular.module('app.nav-bar', []);
navBar.component("navBar", { template, controller });

export default navBar;
