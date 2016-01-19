import Ember from 'ember';
// import i18n from 'i18n';

export default Ember.Component.extend({
	locale: null,
	selectedLocale: 'English',
	locale: ["English", "Italian"],


	actions: {

		setLocale(locale) {
			this.set('locale', locale);
			console.log("locale set:" + locale);

		}

 
		// setLocale: function() {
  //     		var self   = this;
  //     		var cookie = this.get('cookie');
 
	 //      cookie.setCookie('my-key', 'my-value')
	 //        .then(function() {
	 //          self.transitionToRoute('home');
	 //        });
  //   }
		
	}
});



