!function() {

  function ListFilter(input, list) {
    var rgx = new RegExp()
      , keys = [13, 27, 32, 37, 38, 39, 40]
      , value;
    input.on('input keyup', function(event, me) {
      if ($.inArray(event.keyCode, keys) >= 0) {
        return;
      }
      value = input.val();
      rgx.compile(value, 'im');
      $('li', list).each(function(index, elem) {
        $(elem).toggleClass('hidden', rgx.source !== '' && !rgx.test($(elem).text()));
      });
    });
  }

  this.ListFilter = ListFilter;

}();
