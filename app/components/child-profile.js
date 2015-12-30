import Ember from 'ember';
import utilities from '../utilities/utilities';

export default Ember.Component.extend({
	firstName: '',
	lastName: '',
	genderIndex: 0,
	dob: '',
	dateOfBirth: '',

	gender: Ember.computed('genderIndex', function() {
		return this.get('genders')[this.get('genderIndex')];
	}),

	dOfBirth: function(){
		if(this.get('dob')== null || this.get('dob').length==0){
			this.set('dob','');
			this.set('dateOfBirth','');
		} else{
			var userDOB = this.get('dob');
			this.set('dateOfBirth',userDOB.toDateString());
		}
		
		
	}.observes('dob'),

	genders: [
		{name: ''},
		{name: 'male'},
		{name: 'female'},
		{name: 'prefer not to say'},
	],

	actions:{
		'submitChildProfile': function(){
			var firstName = this.get('firstName');
			var lastName = this.get('lastName');
			var gender = this.get('gender.name');
			var dob = this.get('dob');
			var strDob= this.get('dateOfBirth');
			if(utilities.lengthChecker(firstName,0)&&utilities.lengthChecker(lastName,0)&&
				utilities.lengthChecker(gender,0) &&utilities.lengthChecker(strDob,0)){
				var user = Parse.User.current();
				var ChildProfile = Parse.Object.extend("ChildProfiles");
				var profile = new ChildProfile({
					"firstName":firstName,
					"lastName":lastName,
					"gender": gender,
					"dateOfBirth": dob,
					"parent": user
				});
				profile.save(null,{
					success: function(result){
						console.log("saved child profile successfully");
					},
					error: function(error){
						console.log("Error saving child profile: " +error.message)
					}
				});
			}

		}
	}
});
