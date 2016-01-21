/* globals Jed, _*/
import Ember from 'ember';

export function initialize(application) {
  application.deferReadiness();
  /*
   * Store a mapping from locale codes to translation file Urls
   */
  var localeTranslationMapping = {
    'en-US': '/translations.json', // this is a pseudo-translation I have generated for testing purposes
    'en-GB': '/translations.json',
    'Italian': '/it.json',
    'it': '/it.json'
  };

  /*
   * Initialise your i18n library (in this case Jed) with your translations for
   * the current locale
   */
  var language = Cookies.get('language') || window.navigator.userLanguage || window.navigator.language;
  var translationUrl = localeTranslationMapping[language];
  if (translationUrl !== undefined) {
    Ember.$.getJSON(translationUrl, function(translations) {
      var localeData = _.reduce(_.values(translations), function(a, b) {
        
        return _.merge(a,b);
      }, {});

      //fix up the JSON for Jed
      var messages = localeData.locale_data.messages;
      for (var property in messages) {
        if (messages.hasOwnProperty(property) && 
            messages[property] instanceof Array) {
          messages[property] = [messages[property].join()];
        }
      }

      Ember.i18n = new Jed(localeData);
      application.advanceReadiness();
    });
  }
}

export default {
  name: 'i18n',
  initialize
};