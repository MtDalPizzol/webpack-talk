module.exports = function() {

  $(document).on('click', '#multiple-async-load', function() {

    require([
      './async-1.js',
      './async-2.js',
      './async-3.js'
    ], function(async1, async2, async3) {

      var html  = '<h3>' + async1.message + '</h3>';
          html += '<h3>' + async2.message + '</h3>';
          html += '<h3>' + async3.message + '</h3>';

      $('#content').html(html);

    });

  });

  var html  = '<h1>Hello from ASYNC component!</h1>';
      html += '<button id="multiple-async-load" class="btn">Carregar módulos</button>';

  return html;

};
