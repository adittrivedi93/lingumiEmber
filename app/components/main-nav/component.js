import Ember from 'ember';

export default Ember.Component.extend(Ember.TargetActionSupport,{
	userLoggedIn: false,

	username:'',

	didInsertElement(){
		//Here we will check whether the user is logged in
		this.triggerAction({
			action: 'checkUserStatus',
			target: this
		});
	},

	actions:{
		'checkUserStatus': function(){
			Parse.initialize("NwfA1WJLRR60Gms1oLqieScFRjWM9NZiZyjtplt2",
            		"UwY0CCkPXvLAailbo7AiMo2jHEoi3aMyyqZWW2kj");
			var currentUser = Parse.User.current();
			if(currentUser){
				this.set('userLoggedIn', true);
				console.log(currentUser);
				this.set('username', currentUser.getUsername());
			} else{
				this.set('userLoggedIn', false);
			}
		},

		'selectedMore': function(){
			if(Parse.User.current()){
				this.set('userLoggedIn', true);
			} else{
				this.set('userLoggedIn', false);
			}
		},

		'logout': function(){
			Parse.User.logOut();
			this.set('userLoggedIn', false);
		}
	}
});
