import Ember from 'ember';
// import i18n from 'i18n';

export default Ember.Component.extend({

  actions: {
    setLocale: function() {
      var self   = this;
      var cookie = this.get('cookie');
 
      cookie.setCookie('it', 'language')
        .then(function() {
          console.log("set");
        });
    }
  }
});

  // actions: {
  //   setLocale() {
  //     this.set('i18n.locale', this.$('select').val());
  //   }
  // }

