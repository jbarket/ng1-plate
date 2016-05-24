// we use require instead of import here to appease karma-coverage

require('angular');
require('angular-mocks/angular-mocks');

var testsContext = require.context("../src", true, /.spec$/);
testsContext.keys().forEach(testsContext);
