/* globals Handlebars, jQuery, Jed */

var i18n;

/*
 * Store a mapping from locale codes to translation file Urls
 */
var localeTranslationMapping = {
  'en-US': '',
  'en-GB': '',
  'it': '/translations.json' // this is a pseudo-translation I have generated for testing purposes
};

/*
 * Initialise your i18n library (in this case Jed) with your translations for
 * the current locale
 */
var language = window.navigator.userLanguage || window.navigator.language;
var translationUrl = localeTranslationMapping[language];
if (translationUrl !== undefined) {
  jQuery.getJSON(translationUrl, function(translations) {
    i18n = new Jed(translations);
  });
}

/*
 * Here you register the handlebars helper to call your i18n library
 */
Handlebars.registerHelper('_', function(msgid) {
  if (i18n !== undefined) {
    return i18n.translate(msgid);
  }
  return msgid;
});
