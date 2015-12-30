import Ember from 'ember';
import utilities from '../utilities/utilities';

export default Ember.Component.extend({
	firstName: '',
	lastName: '',
	languageIndex: 0,

	nationality: Ember.computed('languageIndex', function() {
		return this.get('languages')[this.get('languageIndex')];
	}),

	languages: [
		{name: ''},
		{name: 'Chinese'},
		{name: 'English'},
		{name: 'French'},
		{name: 'Italian'},
		{name: 'Spanish'}
	],

	actions:{
		'submitParentProfile': function(){
			var firstName = this.get('firstName');
			var lastName = this.get('lastName');
			var nationality = this.get('nationality.name');
			if(utilities.lengthChecker(firstName,0)&&utilities.lengthChecker(lastName,0)&&
				utilities.lengthChecker(nationality,0)){
				var user = Parse.User.current();
				var ParentProfile = Parse.Object.extend("ParentProfile");
				var profile = new ParentProfile({
					"firstName":firstName,
					"lastName":lastName,
					"nationality": nationality,
					"user": user
				});
				profile.save(null,{
					success: function(result){
						console.log("saved parent profile successfully");
					},
					error: function(error){
						console.log("Error saving parent profile: " +error.message)
					}
				});
			}
		}
	}
});
