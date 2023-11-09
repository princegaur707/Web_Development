// Creating a new todo item
$('#inp').keypress(function (e) {
   
    if (e.which === 13) {
        const todoText = $('#inp').val();
        $('#list').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);
        $('#inp').val("");
    }
   
})

// Mark the todo as completed

//Here we are using 'span' and below 'li' extra as a selector to apply below changes on dynamic elements too
//we have applied listener onto 'ul' as it is always present
$('ul').on('click', 'li', function () {//special on() function is used to deal with this situation
    $(this).toggleClass('completed')//.toggleClass( className )
});

//To apply changes on dynamically created elements
$('#list').on('click', 'span', function (e) {//.on( events [, selector ] [, data ], handler ): span selector will trigger the on() when event will occur
    
    $(this).parent().fadeOut(700, function () {//this refer to span => this.parent  -> li
        $(this).remove();
    });

    e.stopPropagation();//stops event  bubbling: it means span will not trigger li 
    //i.e it will be done line-through implies parent will not be triggered
});

$('#plus').click(function () {
    $('#inp').fadeToggle();
})


//app.js files run single time only so all those event listeners who will be added
//to currently present list items only. so, for dynamic one's we have use, on()