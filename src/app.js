import angular from 'angular';

import app from './components/app';
import navBar from './components/nav-bar';
import home from './components/home';

const App = angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ui.bootstrap',
  'toastr',
  'angular-loading-bar',

  app.name,
  navBar.name,
  home.name
]);

function config($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$locationProvider', '$urlRouterProvider'];

App.config(config);

function run($http) {
  $http.defaults.headers.common['Accept'] = 'application/json';
  $http.defaults.headers.common['Content-Type'] = 'application/json';
}

run.$inject = ['$http'];

App.run(run);
