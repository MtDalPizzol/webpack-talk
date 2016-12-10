console.log('async');

function AsyncController() {

  this.view = require('../view/async.hbs');

  $('#content').html(this.view());

}

module.exports = AsyncController;
