import Ember from 'ember';

export default Ember.Component.extend({  
    var container = this.$('.map-canvas')[0];
    insertMap: function() {
        var options = {
            center: new window.google.maps.LatLng(
                this.get('latitude'),
                this.get('longitude')
            ),
            zoom: 15
        };
        new window.google.maps.Map(container, options);
    }.on('didInsertElement')
});
