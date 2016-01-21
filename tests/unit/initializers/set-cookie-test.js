import Ember from 'ember';
import SetCookieInitializer from '../../../initializers/set-cookie';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | set cookie', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  SetCookieInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
