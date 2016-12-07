$(document)

  .ready(function() {

    var component = require('./component');

    $('#result').html(component());

  })

  .on('click', '.btn', function() {

    require.ensure('./async-component.js', function(require) {

      var asyncComponent = require('./async-component.js');

      $('#result').append($(asyncComponent()));

    });

    // var asyncComponent = require('./async-component.js');
    //
    // $('#result').append($(asyncComponent()));

  });
