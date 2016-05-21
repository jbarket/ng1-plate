import { PLATFORM_PIPES } from '@angular/core';


const APPLICATION_PIPES = [];

export const PIPES = [
  { provide: PLATFORM_PIPES, useValue: APPLICATION_PIPES, multi: true }
];
