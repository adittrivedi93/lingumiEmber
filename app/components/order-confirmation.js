import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement: function() {
		//check if parent has a profile and fill in their details
		this.triggerAction({
			action:'clearDB',
			target: this
		});
	},

	actions:{
		'clearDB': function(){
			console.log(localStorage.getItem("confirmationEmail"));
			//delete db
			var CheckoutClass = Parse.Object.extend("Checkout");
			var query = new Parse.Query(CheckoutClass);
			console.log(localStorage.getItem("confirmationParseID"));
			query.get(localStorage.getItem("confirmationParseID"), {
			  success: function(results) {
			    // The object was retrieved successfully.
			    console.log("success");
			    results.destroy({});
			    localStorage.clear();
			  },
			  error: function(object, error) {
			    // The object was not retrieved successfully.
			    // error is a Parse.Error with an error code and message.

			  }
			});

			//clear local storage
		}
	}
});