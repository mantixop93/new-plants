import enDictionary from './dictionaries/en';
import ruDictionary from './dictionaries/ru';

export function config ($logProvider, $translateProvider, $httpProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  $translateProvider.translations('en', enDictionary);
  $translateProvider.translations('ru', ruDictionary);
  $translateProvider.preferredLanguage('en');

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
