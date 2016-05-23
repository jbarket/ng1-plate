/* eslint-disable import/no-unresolved */
import '../../assets/css/main.scss';
import angular from 'angular';
import template from './app.html';
import config from './config';

const app = angular.module('app.app', []);
app.component('app', { template });
app.config(config);

export default app;
