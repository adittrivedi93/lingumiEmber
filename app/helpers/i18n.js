/* globals i18n, Handlebars*/

Handlebars.registerHelper('_', function(msgid) {
  return i18n.translate(msgid);
});

Handlebars.registerHelper('ngettext', function(msgid, plural, count) {
  return i18n.translate(msgid).ifPlural(plural, count);
});
