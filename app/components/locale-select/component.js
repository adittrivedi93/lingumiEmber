import Ember from 'ember';

export default Ember.Component.extend({
	locale: '',
	locales: Ember.String.w('Translate: English Italian'),
	language: Cookies.get('language'),

	getLanguage(){
		console.log(Cookies.get('language'));
		return Cookies.get('language')
	},

	// genders: [
	// 	{name: 'en-US'},
	// 	{name: 'Italian'},
	// ],

	// gender: Ember.computed('genderIndex', function() {
	// 	return this.get('genders')[this.get('genderIndex')];
	// }),

	didInsertElement: function(language) {
		console.log("Locale storage language: " + localStorage.getItem('languageChosen'));
		// this.set(this.get('locale'), "hello");
	},

	actions: {

		setLocale(language) {
			this.set('locale', language);
			Cookies.set('language', language, { expires: 7 });
			localStorage.setItem("languageChosen", language);
			window.location.reload(true);
		}
		
	}
});



