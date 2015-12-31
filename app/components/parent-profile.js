import Ember from 'ember';
import utilities from '../utilities/utilities';

export default Ember.Component.extend({
	firstName: '',
	lastName: '',
	parentId:'',
	genderIndex: 0,
	languageIndex: 0,

	nationality: Ember.computed('languageIndex', function() {
		return this.get('languages')[this.get('languageIndex')];
	}),

	gender: Ember.computed('genderIndex', function() {
		return this.get('genders')[this.get('genderIndex')];
	}),

	languages: [
		{name: ''},
		{name: 'Chinese'},
		{name: 'English'},
		{name: 'French'},
		{name: 'Italian'},
		{name: 'Spanish'}
	],

	genders: [
		{name: ''},
		{name: 'Male'},
		{name: 'Female'},
		{name: 'Prefer not to say'},
	],

	didInsertElement: function() {
		//check if parent has a profile and fill in their details
		this.triggerAction({
			action:'getProfileDetails',
			target: this
		});
	},

	actions:{
		'submitParentProfile': function(){
			var firstName = this.get('firstName');
			var lastName = this.get('lastName');
			var nationality = this.get('nationality.name');
			var gender = this.get('gender.name');
			var self = this;
			if(utilities.lengthChecker(firstName,0)&&utilities.lengthChecker(lastName,0)&&
				utilities.lengthChecker(nationality,0)){
				var user = Parse.User.current();
				var ParentProfile = Parse.Object.extend("ParentProfile");
				var profile = new ParentProfile({
					"firstName":firstName,
					"lastName":lastName,
					"nationality": nationality,
					"gender": gender,
					"user": user
				});
				var parentId = self.get('parentId');
				if(parentId.length>0){
					var query = new Parse.Query("ParentProfile");
					query.equalTo("objectId", parentId);
					query.first({
						success: function(results){
							console.log(results.get("firstName"));
							results.set("firstName", firstName);
							results.set("lastName", lastName);
							results.set("nationality", nationality);
							results.set("gender", gender);
							results.save();
							console.log("Successfully edited results");
						}
					});
				} else{
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
		},

		'getProfileDetails': function(){
			var self = this;
			var ParentProfile = Parse.Object.extend("ParentProfile");
			var q = new Parse.Query(ParentProfile);
			var user = Parse.User.current();
			q.equalTo("user",user);
			q.find({
			  success: function(results){
			  	for(var i = 0; i<results.length; i++){
			  		self.set('parentId', results[i].id);
			  		self.set('firstName', results[i].get('firstName'));
			  		self.set('lastName', results[i].get('lastName'));
			  		self.set('nationality.name', results[i].get('nationality'));
			  		self.set('gender.name', results[i].get('gender'));
			  	}
			  }
			});
		}
	}
});
