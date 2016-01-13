import Ember from 'ember';

export default Ember.Component.extend({
	email: '',

	getCheckoutEmail: function(){
		this.set('email', this.get('checkoutEmail'));
	}.observes('checkoutEmail'),

	actions:{
		'submitCheckout': function(){
			localStorage.setItem("confirmationEmail", this.get('email'));
			var ConfirmationClass = Parse.Object.extend("Checkout");
			var confirmationClass = new ConfirmationClass();
			confirmationClass.set("Email", this.get('email'));
			confirmationClass.save(null, {
			  success: function(confirmationClass) {
			    // Execute any logic that should take place after the object is saved.
			    localStorage.setItem("confirmationParseID", confirmationClass.id);
			    console.log('New object created with objectId: ' + confirmationClass.id);
			  },
			  error: function(confirmationClass, error) {
			    // Execute any logic that should take place if the save fails.
			    // error is a Parse.Error with an error code and message.
			    console.log('Failed to create new object, with error code: ' + error.message);
			  }
			});
			console.log("we have lift off ;)");
		}
	}
});
