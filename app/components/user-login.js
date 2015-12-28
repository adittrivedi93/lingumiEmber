import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
        loginUser: function (userLogin) {
        	var count =0;
            if(userLogin.username!=undefined && userLogin.password!=undefined){
            	console.log(userLogin.username, userLogin.password);
            	Parse.initialize("NwfA1WJLRR60Gms1oLqieScFRjWM9NZiZyjtplt2",
            		"UwY0CCkPXvLAailbo7AiMo2jHEoi3aMyyqZWW2kj");

				Parse.User.logIn("myname", "mypass", {
				  success: function(user) {
				  	console.log("works");
				    // Do stuff after successful login.
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