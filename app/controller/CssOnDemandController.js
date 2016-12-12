function CssOnDemandController() {

  this.view = require('../view/css-on-demand.hbs');

  this.loadCss = function() {
    require(['!style!css?sourceMap!../css/css-on-demand.css']);
  };

  $('#content')
    .html(this.view())
    .on('click', '#load-css', this.loadCss);

}

module.exports = CssOnDemandController;
