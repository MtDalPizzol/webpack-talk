function MultiDependenciesController() {

  this.view = require('../view/multi-dependencies.hbs');

  $(document).on('click', '#load-dependencies', function() {

    require([
      '../lib/async-1.js',
      '../lib/async-2.js',
      '../lib/async-3.js'
    ], function(async1, async2, async3) {

      var html  = '<h3>' + async1.message + '</h3>';
          html += '<h3>' + async2.message + '</h3>';
          html += '<h3>' + async3.message + '</h3>';

      $('#dependencies-content').html(html);

    });

  });

  $('#content').html(this.view());

}

module.exports = MultiDependenciesController;
