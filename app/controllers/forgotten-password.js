import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		forgottenPasswordRedirect: function() {
			this.transitionToRoute('login');
		}
	}
});