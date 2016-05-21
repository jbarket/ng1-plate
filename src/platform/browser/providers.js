import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';


export const PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
];
