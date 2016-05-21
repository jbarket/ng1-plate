import { bootstrap } from '@angular/platform-browser-dynamic';
import { ENV_PROVIDERS } from './platform/environment';
import { PROVIDERS, DIRECTIVES, PIPES } from './platform/browser';
import { App } from './components/app';

export function main() {
  return bootstrap(App, [
    ...PROVIDERS,
    ...ENV_PROVIDERS,
    ...DIRECTIVES,
    ...PIPES
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
