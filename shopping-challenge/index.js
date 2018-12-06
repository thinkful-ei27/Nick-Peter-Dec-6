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
  handleCheck();
  handleDelete();
}

$(main);

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
  return appendUserHTML(html);
}

function appendUserHTML (userHTML) {
  $('.shopping-list').append(userHTML);
}

function handleCheck () {
  $('.shopping-list').on('click', '.shopping-item-toggle', function (e) {
    e.stopPropagation();
    const shoppingItem = $(e.currentTarget).closest('li').children('span');
    shoppingItem.toggleClass('shopping-item__checked');
  });
}

function handleDelete () {
  $('.shopping-list').on('click', '.shopping-item-delete', function (e) {
    e.stopPropagation();
    const shoppingItem = $(e.currentTarget).closest('li');
    shoppingItem.remove();
  });
}