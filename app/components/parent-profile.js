import Ember from 'ember';

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
			console.log(this.get('firstName'));
			console.log(this.get('lastName'));
			console.log(this.get('nationality.name'));
			if(this.get('nationality.name').length==0){
				//if nationality 
			}
		}
	}
});
