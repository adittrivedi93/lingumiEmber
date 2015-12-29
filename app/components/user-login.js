import Ember from 'ember';

export default Ember.Component.extend({
	username: '',
	password: '',
	actions: {
        loginUser: function () {
        	Parse.initialize("NwfA1WJLRR60Gms1oLqieScFRjWM9NZiZyjtplt2",
            		"UwY0CCkPXvLAailbo7AiMo2jHEoi3aMyyqZWW2kj");
        	var count =0;
        	var self = this;
            if(this.get('username').length>0 || this.get('password').length >0){
				Parse.User.logIn(this.get('username'), this.get('password'), {
				  success: function(user) {
				  	console.log("login successful");
				    //For now re-direct to home
				    self.sendAction('userLoggedIn');
				  },
				  error: function(user, error) {
				    // The login failed. Check error to see why.
				    console.log(error.code+": " + error.message);
				  }
				});
          	} else {
            	console.log("No empty fields allowed");
            }
        }
    }
});