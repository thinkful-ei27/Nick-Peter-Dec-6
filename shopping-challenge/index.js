'use strict';

function userInputGet() {
  $('#js-shopping-list-form').on('submit', function (e) {
    e.preventDefault();
    const userInput = $('.js-shopping-list-entry').val();
    // clear user input after submit
    $('.js-shopping-list-entry').val('');
    return userInput;
  });
}

function main() {
  userInputGet();
}

$(main);
// Create shopping list container 
// Turn data into HTML and add to shopping list container
// If user hit check button
// toggle .shopping-item__checked class
// If user hits delete button 
// remove shopping list container and contents


// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().