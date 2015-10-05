!function() {

  function inArray(arr, search, start) {
    if (Array.prototype.indexOf) {
      return arr.indexOf(search, start);
    }
    for (var i = (start || 0), j = arr.length; i < j; i++) {
      if (this[i] === search) {
        return i;
      }
    }
    return -1;
  }

  function addEvent(evt, el, func) {
    if (el.addEventListener) {
      el.addEventListener(evt,func,false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + evt, func);
    } else {
      el[evnt] = func;
    }
  }
  
  function toggleClass(el, className, toggle) {
    var rgx = new RegExp('(\s|^)' + className + '(\s|$)');
    toggle = typeof toggle === 'undefined' ? !rgx.test(el.className) : toggle;

    var classList = el.className.split(/ /)
      , index = inArray(classList, className);

    if (toggle && index === -1) {
      classList.push('hidden');
    }
    if (!toggle && ~index) {
      classList = classList.splice(index - 1, 1);
    }
    el.className = classList.join(' ');
  }

  function caseInsensitiveSearch(needle) {
    needle = needle.toLowerCase();
    return function(haystack) {
      return ~haystack.toLowerCase().indexOf(needle);
    };
  }

  function ListFilter(input, list, options) {
    var opts = options || {}
      , keys = [13, 27, 32, 37, 38, 39, 40]
      , search = opts.search || caseInsensitiveSearch;

    if (typeof search === 'string' && typeof window[search] === 'function') {
      search = window[search];
    }

    if (typeof search !== 'function') {
      throw new Error('Option search is not a function');
    }

    var items = list.getElementsByTagName('li');

    var i, item, len = items.length;
    var keyHandler = function(event, me) {
      if (~inArray(keys, event.keyCode)) {
        return;
      }

      match = search(input.value);

      for (i = 0; i < len; ++i) {
        item = items[i];
        toggleClass(item, 'hidden', !match(item.textContent || item.innerText));
      }
    };

    addEvent('input', input, keyHandler);
    addEvent('keyup', input, keyHandler);
  }

  this.ListFilter = ListFilter;

}();
