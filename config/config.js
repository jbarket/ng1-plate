import { join, resolve } from 'path';
import { isUndefined, forEach } from 'lodash';

export const ENV = getEnv(process.env.npm_lifecycle_event);
export const IS_PROD = ENV === 'production';
export const IS_DEV = ENV === 'development';
export const IS_TEST = ENV === 'test';

export const HOST = process.env.HOST || 'localhost';
export const PORT = process.env.PORT || IS_PROD ? 8080 : 4000;

export const ROOT = resolve(__dirname, '..');
export const CLIENT_DIR = 'src';

//
// Utils
//

/**
 * Check if the command line arguments contains `flag`.
 *
 * @param {string} flag
 * @returns {boolean}
 */
export function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

/**
 * Resolve path relative to root path.
 *
 * @param {...string} args
 * @returns {string}
 */
export function root(...args) {
  return join(ROOT, args.join('/'));
}

/**
 * Resolve path relative to node_modules directory.
 *
 * @param {...string} args
 * @returns {string}
 */
export function rootNode(...args) {
  return root('node_modules', (args).join('/'));
}

/**
 * Gets the current environment.
 *
 * @param {string} npmLifecycleEvent
 * @returns {string}
 */
export function getEnv(npmLifecycleEvent) {

  if (isUndefined(npmLifecycleEvent)) {
    throw new Error('Do not run webpack commands directly, use npm scripts instead.');
  }

  let env;

  if (npmLifecycleEvent.indexOf(':prod') !== -1) {
    env = 'production';
  } else if (npmLifecycleEvent.indexOf(':dev') !== -1) {
    env = 'development';
  } else if (npmLifecycleEvent.indexOf('test') !== -1) {
    env = 'test';
  }

  return env;
}

/**
 * Sorts package order. It should always be `['polyfills', 'vendor', 'main']`.
 *
 * @param {Array} packages
 * @returns {function}
 */
export function packageSort(packages) {
  const first = packages[0];
  const last = packages[packages.length - 1];

  return function sort(a, b) {
    // polyfills always first
    if (a.names[0] === first) {
      return -1;
    }
    // main always last
    if (a.names[0] === last) {
      return 1;
    }
    // vendor before main
    if (a.names[0] !== first && b.names[0] === last) {
      return -1;
    } else {
      return 1;
    }
  };
}

/**
 * Load environment variables from .env.json.
 *
 * @returns {object}
 */
export function loadEnvironmentVariables() {
  const envVars = {};

  forEach(require(root('.env')), (value, key) => {
    envVars[key] = JSON.stringify(value);
  });

  return envVars;
}
