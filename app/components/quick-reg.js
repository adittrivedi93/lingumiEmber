import Ember from 'ember';

export default Ember.Component.extend({

	email: '',

	actions:{
		quickReg: function(){
			this.set('email', this.get('email'));
			this.sendAction("quickReg", this.get("email"));
		}
	}
});
