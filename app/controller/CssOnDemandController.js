function CssOnDemandController() {

  require('!style!css?sourceMap!../css/css-on-demand.css');
  this.view = require('../view/css-on-demand.hbs');

  $('#content').html(this.view());

}

module.exports = CssOnDemandController;
