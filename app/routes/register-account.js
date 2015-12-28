import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return {};
	},

	actions: {
		registration: function(){
			//Why won't you work :(
			alert("reached in route");
		}
	}
});
