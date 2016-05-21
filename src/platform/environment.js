import { enableProdMode } from '@angular/core';
import {
  ELEMENT_PROBE_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS_PROD_MODE
} from '@angular/platform-browser';


// Environment Providers
const PROVIDERS = [];

if (isProd) {
  enableProdMode();
  PROVIDERS.push(ELEMENT_PROBE_PROVIDERS_PROD_MODE);
} else {
  PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
