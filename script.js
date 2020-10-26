// to add an item to the list //
function watchSubmit(){
  $('#js-shopping-list-form').on('submit', function(event){
    event.preventDefault();

    const enteredItem = $('#shopping-list-entry').val();

    // $('.shopping-list').append( `<span class="shopping-item">${enteredItem}</span>`);

    $(".shopping-list").append(`<li><span class="shopping-item">${enteredItem}</span>
          <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
    </li>`)
    
    });

  // to delete an item from the list //
  $(".shopping-list").on("click", ".shopping-item-delete", function () {
    this.closest("li").remove()
  })

  $(".shopping-list").on("click", ".shopping-item-toggle", function()  {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  });
}


// to check an item on the list //
function watchListItem(){
  // Event delegation
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    $('.shopping-item').addClass('.shopping-item__checked');
  });
}

$(watchSubmit);
$(watchListItem);