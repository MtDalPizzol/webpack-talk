function PreprocessorsController() {

  this.view = require('../view/preprocessors.hbs');

  this.loadStyles = function() {

    switch($(this).data('pre')) {
      case "less":
        require(['../css/less-styles.less']);
      break;
      case "sass":
        require(['../css/sass-styles.scss']);
      break;
    }

  };

  $('#content')
    .html(this.view())
    .on('click', '.load-style', this.loadStyles);

}

module.exports = PreprocessorsController;
