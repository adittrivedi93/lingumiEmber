import Ember from 'ember';

export default Ember.Component.extend({
	needs: 'quickReg',
	title: 'Register to get started',
	email: '',
	password: '',
	repeatPassword: '',
	count:false,

	didRender: function(){
		if(this.get('count') == false){		
			this.set('count',true);
			Ember.run.scheduleOnce('afterRender', this, 'setQuickRegEmail');
		}
	},

	setQuickRegEmail: function(){
		if(this.get('model').length==0){
			console.log("correctomondo");
		} else{
			this.set('email', this.get('model'));
		}
	},

	changePasswordStrength: function(){
		var strengthCounter =0;
		var pass = this.get('password');
		strengthCounter = hasLower(pass) + lengthMin(pass,5) + hasUpperCase(pass)
		+ hasNumbers(pass);
		switch(strengthCounter){
			case 0:
				this.set('passwordStrength', 'Weak');
				break;
			case 1:
				this.set('passwordStrength', 'OK');
				break;
			case 2:
				this.set('passwordStrength', 'Good');
				break;
			case 3:
				this.set('passwordStrength', 'Very Good');
				break;
			case 4:
				this.set('passwordStrength', 'Excellent');
				break;
			default:
				this.set('passwordStrength', '')
		}
	}.observes('password'),

	actions:{
		registration: function(){
			console.log("click from component");
			var email = this.get('email');
			var password = this.get('password');
			var self = this;
			if(this.get('email').length>6){
				if(this.get('password') == this.get('repeatPassword')){
					Parse.initialize("NwfA1WJLRR60Gms1oLqieScFRjWM9NZiZyjtplt2",
            		"UwY0CCkPXvLAailbo7AiMo2jHEoi3aMyyqZWW2kj");
					var query = new Parse.Query(Parse.User);
					query.equalTo("username",this.get('email'));
					query.first({
						success:function(results){
							if(results == undefined){
								console.log("user does not exist");
								var user = new Parse.User();
								user.set("username", email);
								user.set("password", password);
								user.set("email", email);

								user.signUp(null, {
								  success: function(user) {
								    // Hooray! Let them use the app now.
								    if(self.get('model').length>0){
										var QuickReg = Parse.Object.extend("QuickRegistration");
										var query = new Parse.Query(QuickReg);
										query.equalTo("Email", self.get('model'));
										query.find().then(function(results) {
										    return Parse.Object.destroyAll(results);
										}).then(function() {
										    console.log("successfully registered account");
										    self.sendAction("registrationComplete");
										}, function(error) {
										    // Error
										});
								    } 
								  },
								  error: function(user, error) {
								    // Show the error message somewhere and let the user try again.
								    alert("Error: " + error.code + " " + error.message);
								  }
								});
							} else {
								console.log("user already exists");
							}
						}
					});
				} else{
					console.log("passwords do not match");
				}
			} else{
				console.log("Enter an email");
			}
		}
	}
});

function hasLower(str){
	var count =0;
	if((/[a-z]/.test(str))){
		count =1;
	}
	return count;
}

function lengthMin(str, minVal){
	var count =0;
	if(str.length > minVal){
		count =1;
	}
	return count;
}

function hasUpperCase(str) {
	var count =0;
    if((/[A-Z]/.test(str))){
    	count =1;
    }
    return count;
}

function hasNumbers(str)
{
	var count = 0;
	var regex = /\d/g;
	if(regex.test(str)){
		count=1;
	}
	return count;
}