'use strict';

function handleFormSubmit() {
  $('#js-shopping-list-form').on('submit', function (e) {
    e.preventDefault();
    const userInput = $('.js-shopping-list-entry').val();
    // clear user input after submit
    $('.js-shopping-list-entry').val('');
    return userContainerHTML(userInput);
  });
}

function main() {
  handleFormSubmit();
}

$(main);
// Create shopping list container 
/*<ul class="shopping-list">
      <li>
        <span class="shopping-item">apples</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
*/

function userContainerHTML(input) {
  const html = `<li>
  <span class="shopping-item">${input}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`;
  return html;
}

// Turn data into HTML and add to shopping list container
// If user hit check button
// toggle .shopping-item__checked class
// If user hits delete button 
// remove shopping list container and contents


// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().