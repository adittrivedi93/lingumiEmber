/* globals Jed, _*/
import Ember from 'ember';

export function initialize(application) {
  application.deferReadiness();
  /*
   * Store a mapping from locale codes to translation file Urls
   */
  var localeTranslationMapping = {
    'en-US': '/en.json', // this is a pseudo-translation I have generated for testing purposes
    'en-GB': '/en.json',
    'English': '/en.json',
    'Italian': '/it.json',
    'it': '/it.json'
  };

  /*
   * Initialise your i18n library (in this case Jed) with your translations for
   * the current locale
   */
  var language = Cookies.get('language') || window.navigator.userLanguage || window.navigator.language;
  var translationUrl = localeTranslationMapping[language];
  application.register('urlSwitcher:locale', language);


  if (translationUrl !== undefined) {
    Ember.$.getJSON(translationUrl, function(translations) {
      var localeData = _.reduce(_.values(translations), function(a, b) {
        
        return _.merge(a, b);
      }, {});

      //fixes up the JSON for Jed
      // this is for the JSON compiler - po 2 JSON
      // creates an object for every PO file, creates a super object, this code below
      // merges those objects together, and then concatenates that into JSON
      var messages = localeData.locale_data.messages;
      for (var property in messages) {
        if (messages.hasOwnProperty(property) && 
            messages[property] instanceof Array) {
          messages[property].shift();
          messages[property] = [messages[property].join()];
        }
      }

      Ember.i18n = new Jed(localeData);
      application.advanceReadiness();
      // application.inject('route', 'locale', 'urlSwitcher:locale');
    });
  }
}

export default {
  name: 'i18n',
  name: 'locale',
  initialize: initialize
};