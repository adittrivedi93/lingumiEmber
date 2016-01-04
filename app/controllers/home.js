import Ember from 'ember';

export default Ember.Controller.extend({

	quickEmail: '',

	actions: {
		quickReg: function(email) {
			this.set('quickEmail', email);
			var self = this;
			var user = Parse.User.current();
			var QuickRegistration = Parse.Object.extend("QuickRegistration");
			var profile = new QuickRegistration({
				"Email":email,
				"Registered":false			
			});
			profile.save(null,{
				success: function(result){
					console.log("saved email successfully");
					console.log("Quick email: " + self.get('quickEmail'));
					self.transitionToRoute('registerAccount');
				},
				error: function(error){
					console.log("Error saving child profile: " +error.message);
				}
			});
		}
	}
});