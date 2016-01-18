import Ember from 'ember';

/*
 * Here you register the handlebars helper to call your i18n library
 */
export function t(params) {
  return Ember.String.htmlSafe(Ember.i18n.translate(params[0]).fetch());
}

export default Ember.Helper.helper(t);
