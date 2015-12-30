import Ember from 'ember';

export default Ember.Component.extend({
	firstName: '',
	lastName: '',
	genderIndex: 0,
	dateOfBirth: '',

	gender: Ember.computed('genderIndex', function() {
		return this.get('genders')[this.get('genderIndex')];
	}),

	genders: [
		{name: ''},
		{name: 'male'},
		{name: 'female'},
		{name: 'prefer not to say'},
	],

	dOfBirth: function(){
		var date = this.get('dob');
		this.set('dateOfBirth', date.toDateString());
		console.log("reached");
	}.observes('dob'),

	actions:{
		'registerChildProfile': function(){
			this.set('gender.name','');
			console.log(this.get('firstName'));
			console.log(this.get('lastName'));
			console.log(this.get('dob'));
			var date = this.get('dob');
			console.log(date.toDateString());
		}
	}
});
