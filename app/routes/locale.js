import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
		console.log(window.navigator.language+ "this is showing");
		// this.transitionTo('locale.home', { locale: Cookies.get('language') });
	}
});
