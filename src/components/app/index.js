/* eslint-disable import/no-unresolved */
import '../../assets/css/main.scss';
import { Component } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { HomeComponent } from '../home';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  }
])
export class App {
}
