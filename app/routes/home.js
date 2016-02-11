import Ember from 'ember';

import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
	// beforeModel: function() {
	// 	console.log("home route");
	// }
});
	// beforeModel: function(){
	// 	language = locale;
	// 	this.transitionTo('locale.home', { locale: language });
	// 	console.log("done");
	// }

	// model: function(){
	// 	return {};
	// }
// });
