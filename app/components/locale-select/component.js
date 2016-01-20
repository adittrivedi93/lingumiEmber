import Ember from 'ember';
// import i18n from 'i18n';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	locale: null,
	// selectedLocale: 'English',
	locale: ["English", "Italian"],

	actions: {

		// setLocale(locale) {
		// 	this.set('locale', locale);
		// 	console.log("locale set:" + locale);
		// 	this.set('locale', this.get('locale'));
		// 	// var self = this;
		// 	// var cookie = this.get('cookie');
		// 	// this.cookie.set('language', 'selectedLocale');
		// 	// console.log(this.cookie);
		// },
		setLocale: function(locale) {
			if (Cookies.get('locale') === true) {
				console.log("found cookie");
			}
			else {
				console.log("Haven't found cookie");
			};
			this.set('locale', locale);
			Cookies.set('locale', locale);
			window.location.reload(true);

		}
	}
});

		// testAction: function() {
  //     		var self   = this;
  //     		var cookie = this.get('cookie');
 
  //     		cookie.setCookie('language', 'selectedLocale')
  //       		.then(function() {
  //         		self.transitionToRoute('success');
  //       	});
  //   	}


 
		// setLocale: function() {
  //     		var self   = this;
  //     		var cookie = this.get('cookie');
 
	 //      cookie.setCookie('my-key', 'my-value')
	 //        .then(function() {
	 //          self.transitionToRoute('home');
	 //        });
  //   }
		


