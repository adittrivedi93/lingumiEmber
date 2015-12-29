import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		userLoggedIn: function() {
			this.transitionToRoute('home');
		}
	}
});