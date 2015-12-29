import Ember from 'ember';

export default Ember.Component.extend({
	username: '',

	actions: {
		forgottenPassword: function(){
			var self = this;
			var username = this.get('username');
			//Check if user exists in database
			//Then send link for forgotten password
			Parse.initialize("NwfA1WJLRR60Gms1oLqieScFRjWM9NZiZyjtplt2",
            		"UwY0CCkPXvLAailbo7AiMo2jHEoi3aMyyqZWW2kj");
			var query = new Parse.Query(Parse.User);
			query.equalTo("username",username);
			query.first({
				success:function(results){
					if(results != undefined){
						console.log("user exists");
						Parse.User.requestPasswordReset(username, {
						  success: function() {
						  // Password reset request was sent successfully
						  	console.log("check email");
						  	self.sendAction('forgottenPasswordRedirect');
						  },
						  error: function(error) {
						    // Show the error message somewhere
						    console.log("Error: " + error.code + " " + error.message);
						  }
						});
					} else {
						console.log("user does not exist, enter your username");

					}
				}
			});
			
		}
	}
});
