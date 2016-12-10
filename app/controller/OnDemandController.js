function OnDemandController() {

  this.view = require('../view/on-demand.hbs');

  $('#content').html(this.view());

}

module.exports = OnDemandController;
