function config($stateProvider) {
  $stateProvider
    .state('index', { url: '/', template: '<home></home>' });
}

export default config;
