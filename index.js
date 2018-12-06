'use strict';
$(function handleCatClick () {
  $('.thumbnail').on('click', function (e) {
    e.stopPropagation();
    console.log('it works', e.target);
  });
});