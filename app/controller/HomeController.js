function HomeController() {

  this.data = require('../data/home.json');
  this.view = require('../view/home.hbs');

  $('#content').html(this.view(this.data));

}

module.exports = HomeController;
