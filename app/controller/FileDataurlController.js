function FileDataurlController() {

  this.view = require('../view/file-dataurl.hbs');

  this.loadImages = function(e) {

    require([
      '../img/favicon.svg',
      '../img/house-meme.jpg'
    ], function(img1, img2) {

      var $img1 = $('<img>').attr('src', img1);
      var $img2 = $('<img>').attr('src', img2);

      $('#img-dataurl').html($img1);
      $('#img-file').html($img2);

    });

  };

  $('#content')
    .html(this.view())
    .on('click', '#load-json', this.loadImages);

}

module.exports = FileDataurlController;
