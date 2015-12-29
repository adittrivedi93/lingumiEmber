import Ember from 'ember';

export default Ember.Component.extend({
	firstName: '',
	lastName: '',
	genderIndex: 0,
	dob: '',

	gender: Ember.computed('genderIndex', function() {
		return this.get('genders')[this.get('genderIndex')];
	}),

	genders: [
		{name: ''},
		{name: 'male'},
		{name: 'female'},
		{name: 'prefer not to say'},
	],

	actions:{
		'submitParentProfile': function(){
			console.log(this.get('firstName'));
			console.log(this.get('lastName'));
			console.log(this.get('nationality.name'));
			if(this.get('genders.name').length==0){
				//if nationality 
			}
		}
	}
});
