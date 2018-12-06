'use strict';
$(
  function handleCatClick () {
  $('.thumbnail').on('click', function (e) {
    e.stopPropagation();
    const catTarget = $(e.currentTarget).children().clone();
    $('.hero img').replaceWith(catTarget);
    // console.log(e.currentTarget);
  });
}
);



//$('.hero').html(e.target);
//console.log("Everything is broken.");
//$(e.target).clone().appendTo('.hero');
