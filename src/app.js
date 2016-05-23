import angular from 'angular';

import app from './components/app';
import home from './components/home';

const App = angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngMessages',
  'ngMaterial',
  'toastr',

  app.name,
  home.name
]);

function config($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$locationProvider', '$urlRouterProvider'];

App.config(config);
