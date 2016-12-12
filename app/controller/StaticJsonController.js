function StaticJsonController() {

  this.view = require('../view/static-json.hbs');

  this.loadJson = function(e) {

    require([
      '../data/static-json-1.json',
      '../data/static-json-2.json',
      'highlightjs',
      '!style!css!highlightjs/styles/railscasts.css'
    ], function(data1, data2, hljs) {

      $('#json-data-1').html(JSON.stringify(data1, null, 3));
      $('#json-data-2').html(JSON.stringify(data2, null, 3));

      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });


    });

  };

  $('#content')
    .html(this.view())
    .on('click', '#load-json', this.loadJson);

}

module.exports = StaticJsonController;
