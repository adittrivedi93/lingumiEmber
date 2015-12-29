// this is our controller for the template register-account (which contains nothing except the component register-user). 
// This controller has an action handler for action 'registration'. We receive this action from inside our component by adding
// a 'sendAction' for 'registration' to our component js file, and 'return true' which allows it to bubble up

import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		registration: function() {
			this.transitionToRoute('home');
		}
	}
});
