

function refreshList() {
    
    $('#list').empty();

    $.get('/todos', function (data) {//sending this get request to index.js (backend)

        for (let todo of data) {//we are getting the 'data' from backend(index.js)
            $('#list').append(`<li>${todo}</li>`);
        }
    });

}

refreshList();

//Adding the new entry to the backend
$('#btn').click(function () {//We cannot have opted for DOM b/c 
    //that new entry will be lost once page is refreshed 
    
    const todo = $('#inp').val();

    $.post('/todos', { todo }, function (res) {//post: jQuery method
        console.log(res);
        $('#inp').val("");
        refreshList();
    })

})

