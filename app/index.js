var HomeController = require('./controller/HomeController.js');

$(document)

  .ready(function() {

    new HomeController();

  })

  .on('click', '.menu-item', function(e) {
    e.preventDefault();

    var page = _.upperFirst(_.camelCase($(this).attr('href')));
    // var file = './controller/' + page + 'Controller.js';

    require('bundle!./controller/' + page + 'Controller.js')(function(module) {
      new module();
    });


    // switch (page) {
    //   case "Async":
    //     require(['./controller/AsyncController.js'], function(module) {
    //       new module();
    //     });
    //     break;
    //   case "MultiDependencies":
    //     require(['./controller/MultiDependenciesController.js'], function(module) {
    //       new module();
    //     });
    //     break;
    // }

  });
