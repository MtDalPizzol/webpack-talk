var DEFAULT_ROUTE     = 'embeded-dependencies';
var EmbededController = require('./controller/EmbededController.js');

/**
 * Load modules asynchronously
 * @param  {[string]} route     [the state route]
 * @param  {[boolean]} pushState [show push state to browser history?]
 */
$.loadModule = function(route, pushState) {

  var controller = ROUTES[route];

  require('bundle!./controller/' + controller + '.js')(function(Module) {
    new Module();
    if (pushState) {
      window.history.pushState({ route: route }, null, route);
    }
  });

};


$(document)

  /**
   * Force home state
   */
  .ready(function() {
    new EmbededController();
    window.history.replaceState({ route: DEFAULT_ROUTE }, null, DEFAULT_ROUTE);
  })


  /**
   * Handle the menu
   */
  .on('click', '.menu-item', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var route = href.replace(href.charAt(0), '');
    $.loadModule(route, true);
  });


$(window)

  /**
   * Handle browser's back and forward buttons
   */
  .on('popstate', function(e) {
    $.loadModule(e.originalEvent.state.route);
  });
