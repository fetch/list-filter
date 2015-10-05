List Filter
==================

Simple list filter.

This plugin adds a class `hidden` to the items that doesn't match the criteria.

## Compatibility

Should work in IE8 and up. (not tested yet).

## Example

```html
<p>
  <input type="text" name="seach" value="" class="js-search" placeholder="Search">
</p>

<p>
  <ul class="js-list">
    <li>Lorem ipsum</li>
    <li>Ipsum dolore</li>
    <li>Dolore sit</li>
    <li>Sit amet</li>
    <li>Amet lorem</li>
  </ul>
</p>

<script src="src/list-filter.js"></script>
<script>
new ListFilter(document.querySelector('.js-search'), document.querySelector('.js-list'));
</script>
```

## Custom search function

It is possible to use a custom search function. For example the excellent (Fuzzysearch)[https://github.com/bevacqua/fuzzysearch]:

This function is called with the the input value, and should return a function that accepts the content of the list item.

```js
new ListFilter(document.querySelector('.js-search'), document.querySelector('.js-list'), {
  search: function(needle) {
    needle = needle.toLowerCase();
    return function(haystack) {
      return fuzzysearch(needle, haystack.toLowerCase);
    };
  }
});
```

## Known issues

`element.textContent` / `element.innerText` are not generally available, so search results may differ depending on the browser being used.
