function EmbededController() {

  this.data = require('../data/embeded.json');
  this.view = require('../view/embeded.hbs');

  $('#content').html(this.view(this.data));

}

module.exports = EmbededController;
