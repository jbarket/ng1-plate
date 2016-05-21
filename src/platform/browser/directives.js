import { PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';


const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES
];

export const DIRECTIVES = [
  { provide: PLATFORM_DIRECTIVES, useValue: APPLICATION_DIRECTIVES, multi: true }
];
