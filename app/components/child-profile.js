import Ember from 'ember';
import utilities from '../utilities/utilities';

export default Ember.Component.extend({
	childId: '',
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

	didInsertElement: function() {
		//check if parent has a profile and fill in their details
		this.triggerAction({
			action:'getProfileDetails',
			target: this
		});
	},

	genders: [
		{name: ''},
		{name: 'Male'},
		{name: 'Female'},
		{name: 'Prefer not to say'},
	],

	actions:{
		'submitChildProfile': function(){
			var firstName = this.get('firstName');
			var lastName = this.get('lastName');
			var gender = this.get('gender.name');
			var dob = this.get('dob');
			//strDob just used to check length as is a string object
			var strDob= this.get('dateOfBirth');
			var self = this
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
				var childId = self.get('childId');
				if(childId.length>0){
					var query = new Parse.Query("ChildProfiles");
					query.equalTo("objectId", childId);
					query.first({
						success: function(results){
							console.log(results.get("firstName"));
							results.set("firstName", firstName);
							results.set("lastName", lastName);
							results.set("gender", gender);
							results.set("dateOfBirth", dob);
							results.save();
							console.log("Successfully edited results");
						}
					});
				} else{
					profile.save(null,{
						success: function(result){
							console.log("saved child profile successfully");
						},
						error: function(error){
							console.log("Error saving child profile: " +error.message);
						}
					});
				}
			}
		},

		'getProfileDetails': function(){
			console.log("child profile reached");
			var self = this;
			var ChildProfile = Parse.Object.extend("ChildProfiles");
			var q = new Parse.Query(ChildProfile);
			var user = Parse.User.current();
			q.equalTo("parent",user);
			q.find({
			  success: function(results){
			  	for(var i = 0; i<results.length; i++){
			  		self.set('childId', results[i].id);
			  		self.set('firstName', results[i].get('firstName'));
			  		self.set('lastName', results[i].get('lastName'));
			  		self.set('gender.name', results[i].get('gender'));
			  		self.set('dob', results[i].get('dateOfBirth'));
			  	}
			  }
			});
		}
	}
});