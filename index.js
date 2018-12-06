'use strict';
$(
  function handleCatClick () {
  $('.thumbnail').on('click', function (e) {
    e.stopPropagation();
    const catTarget = $(e.target).clone();
    $('.hero img').replaceWith(catTarget);
    console.log("Oh, God.");
  });
}
);



//$('.hero').html(e.target);
//console.log("Everything is broken.");
//$(e.target).clone().appendTo('.hero');
