import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		navigate: function(){
			console.log("reached in route");
		}
	}
});
