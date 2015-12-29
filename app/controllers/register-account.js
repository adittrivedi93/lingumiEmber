import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		registrationComplete: function() {
			this.transitionToRoute('home');
		}
	}
});