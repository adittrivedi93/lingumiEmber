export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'set-cookie',
  after: ['cookie'],
 
  initialize: function(app) {
    app.inject('controller', 'cookie', 'cookie:main');
  }
};
