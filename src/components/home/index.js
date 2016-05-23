/* eslint-disable import/no-unresolved */
import angular from 'angular';
import template from './home.html';

const home = angular.module('app.home', []);
home.component('home', { template });

export default home;
