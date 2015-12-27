//This file defines all the routes our application has

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('aboutUs');
  this.route('method');
  this.route('system');
  this.route('login');
  this.route('registerAccount');
});

export default Router;
