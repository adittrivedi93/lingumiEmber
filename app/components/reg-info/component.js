import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		showinfo: function() {
      console.log("ready and up");
			$('.reg_info').toggle();
      return false;
   //  		$('#reg_why_btn').click(function() { //event called
   //  			if($('#reg_info').is(':hidden')){
   //         			$("#reg_info").show();
   //     			} else if ($('#reg_info').is(':visible')) {
   //              console.log("I'm visible!");
   //         			$("#reg_info").hide();
   //     			}; 
   //  		});
   //    this.sendAction("quickreg");
		}
	}
});
