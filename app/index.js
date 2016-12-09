var HomeController = require('./controller/HomeController.js');

$(document)

  .ready(function() {

    new HomeController();

  })

  .on('click', '.menu-item', function(e) {
    e.preventDefault();

    var page = _.upperFirst(_.camelCase($(this).attr('href')));

    /**
     * The modules here will be dynamically loaded on demand
     */
    require(['./controller/' + page + 'Controller.js'], function(ctrl) {
      new ctrl();
    });

  });
