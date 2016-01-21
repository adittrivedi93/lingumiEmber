import Ember from 'ember';

export default Ember.Component.extend({

	locale: null,
	locales: Ember.String.w('en-US Italian'),
	language: Cookies.get('language'),

	actions: {

		setLocale(locale) {
			this.set('locale', locale);
			console.log("locale set:" + locale);
			console.log("localeSelected:" + localeSelected);
			Cookies.set('language', locale, { expires: 7 });

			// window.location.reload(true);
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



